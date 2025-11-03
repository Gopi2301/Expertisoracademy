import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Configuration
const config = {
  sourceDir: path.join(rootDir, 'src/assets'),
  outputDir: path.join(rootDir, 'src/assets/optimized'),
  quality: {
    jpeg: 80,
    png: 80,
    webp: 85,
  },
  // Large images to prioritize
  priorityImages: [
    'tamil.png',
    'creators.png',
    'creators_Desk.png',
    'cert.png',
    'intern.png',
    'sathish.png',
  ],
};

async function optimizeImage(filePath, outputDir, format = 'webp') {
  const fileName = path.basename(filePath);
  const ext = path.extname(fileName);
  const nameWithoutExt = path.basename(fileName, ext);
  
  try {
    if (format === 'webp') {
      await imagemin([filePath], {
        destination: outputDir,
        plugins: [
          imageminWebp({ quality: config.quality.webp }),
        ],
      });
      return path.join(outputDir, `${nameWithoutExt}.webp`);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await imagemin([filePath], {
        destination: outputDir,
        plugins: [
          imageminMozjpeg({ quality: config.quality.jpeg }),
        ],
      });
      return path.join(outputDir, fileName);
    } else if (ext === '.png') {
      await imagemin([filePath], {
        destination: outputDir,
        plugins: [
          imageminPngquant({ quality: [0.6, 0.8] }),
        ],
      });
      return path.join(outputDir, fileName);
    }
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error);
    return null;
  }
}

async function getLargeImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await getLargeImages(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext) && stat.size > 200 * 1024) {
        fileList.push({
          path: filePath,
          size: stat.size,
          name: file,
        });
      }
    }
  }
  
  return fileList;
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  // Create output directory
  if (!fs.existsSync(config.outputDir)) {
    fs.mkdirSync(config.outputDir, { recursive: true });
  }
  
  // Find large images
  console.log('📸 Finding large images (>200KB)...');
  const largeImages = await getLargeImages(config.sourceDir);
  largeImages.sort((a, b) => b.size - a.size);
  
  console.log(`Found ${largeImages.length} large images:\n`);
  largeImages.slice(0, 20).forEach(img => {
    console.log(`  - ${img.name}: ${(img.size / 1024 / 1024).toFixed(2)} MB`);
  });
  console.log('');
  
  // Optimize images
  const optimized = [];
  const failed = [];
  
  for (const img of largeImages) {
    const relativePath = path.relative(config.sourceDir, img.path);
    const outputSubDir = path.join(config.outputDir, path.dirname(relativePath));
    
    if (!fs.existsSync(outputSubDir)) {
      fs.mkdirSync(outputSubDir, { recursive: true });
    }
    
    console.log(`Optimizing: ${img.name}...`);
    
    // Create compressed original
    const compressedOriginal = await optimizeImage(
      img.path,
      outputSubDir,
      path.extname(img.name).slice(1)
    );
    
    // Create WebP version
    const webpVersion = await optimizeImage(
      img.path,
      outputSubDir,
      'webp'
    );
    
    if (compressedOriginal || webpVersion) {
      optimized.push({
        original: img.path,
        compressed: compressedOriginal,
        webp: webpVersion,
        originalSize: img.size,
      });
      console.log(`  ✅ Optimized: ${img.name}`);
      
      if (compressedOriginal) {
        const newSize = fs.statSync(compressedOriginal).size;
        const reduction = ((1 - newSize / img.size) * 100).toFixed(1);
        console.log(`     Size reduction: ${reduction}%`);
      }
    } else {
      failed.push(img.name);
      console.log(`  ❌ Failed: ${img.name}`);
    }
    console.log('');
  }
  
  // Summary
  console.log('\n📊 Optimization Summary:');
  console.log(`  ✅ Optimized: ${optimized.length} images`);
  console.log(`  ❌ Failed: ${failed.length} images`);
  
  if (optimized.length > 0) {
    const totalOriginalSize = optimized.reduce((sum, img) => sum + img.originalSize, 0);
    const totalCompressedSize = optimized.reduce((sum, img) => {
      if (img.compressed) {
        return sum + fs.statSync(img.compressed).size;
      }
      return sum;
    }, 0);
    const totalReduction = ((1 - totalCompressedSize / totalOriginalSize) * 100).toFixed(1);
    
    console.log(`  📦 Total size reduction: ${totalReduction}%`);
    console.log(`  📁 Optimized images saved to: ${config.outputDir}`);
  }
  
  console.log('\n✨ Done!');
}

main().catch(console.error);

