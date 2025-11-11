/* eslint-env node */

/**
 * Convert large mentor SVG illustrations into modern WebP assets.
 * Reduces payload size for BecomeMentor and mentorship experiences.
 *
 * Usage: node scripts/convert-mentor-assets.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');

const targets = [
  {
    sourceDir: path.join(projectRoot, 'src/assets/images/BecomeMentor/mentors'),
    outputDir: path.join(projectRoot, 'src/assets/optimized/mentors'),
    width: 1400,
    quality: 82,
  },
  {
    files: [
      'src/assets/images/BecomeMentor/key_ben_mentors.svg',
      'src/assets/images/BecomeMentor/b_mentor_mobile.svg',
      'src/assets/images/ment_icon.svg',
      'src/assets/images/mobile_phone.svg',
    ],
    outputDir: path.join(projectRoot, 'src/assets/optimized/becomeMentor'),
    width: 1800,
    quality: 85,
  },
  {
    files: [
      'src/assets/images/mentorship/raghulan_mentor/banner_raghulan.svg',
      'src/assets/images/mentorship/raghulan_mentor/banner_raghulan_mob.svg',
      'src/assets/images/mentorship/raghulan_mentor/raghulan_profile.svg',
      'src/assets/images/mentorship/raghulan_mentor/spec_img1.svg',
      'src/assets/images/mentorship/raghulan_mentor/spec_img2.svg',
    ],
    outputDir: path.join(projectRoot, 'src/assets/optimized/mentorship'),
    width: 1800,
    quality: 85,
  },
  {
    files: [
      'src/assets/images/solidworks/solidworks_mentor.svg',
      'src/assets/images/solidworks/sw_mentor.svg',
      'src/assets/images/courses_card/elavarasan_ment_i.svg',
      'src/assets/images/courses_card/raghulan_ment_i.svg',
      'src/assets/images/courses_card/swaminathan_ment_i.svg',
    ],
    outputDir: path.join(projectRoot, 'src/assets/optimized/courses'),
    width: 1600,
    quality: 85,
  },
  {
    sourceDir: path.join(projectRoot, 'src/assets/images/mentors'),
    outputDir: path.join(projectRoot, 'src/assets/optimized/mentorsRun'),
    width: 1600,
    quality: 82,
  },
];

/**
 * Convert a single SVG file to WebP using sharp.
 */
async function convertFile(inputPath, outputPath, { width, quality }) {
  await fs.promises.mkdir(path.dirname(outputPath), { recursive: true });

  const baseName = path.basename(outputPath);
  process.stdout.write(`→ ${baseName} `);

  try {
    const fileBuffer = await fs.promises.readFile(inputPath);
    const asText = fileBuffer.toString('utf8');

    const dataUriMatch = asText.match(/data:image\/(png|jpeg);base64,([^"]+)/i);

    if (dataUriMatch) {
      const base64Data = dataUriMatch[2].replace(/\s+/g, '');
      const imageBuffer = Buffer.from(base64Data, 'base64');

      await sharp(imageBuffer, { limitInputPixels: false })
        .resize({ width, withoutEnlargement: true })
        .webp({ quality, effort: 4 })
        .toFile(outputPath);
    } else {
      await sharp(fileBuffer, { density: 240, limitInputPixels: false })
        .resize({ width, withoutEnlargement: true })
        .webp({ quality, effort: 4 })
        .toFile(outputPath);
    }
    process.stdout.write('✓\n');
  } catch (error) {
    process.stdout.write('✗\n');
    console.error(`   Failed to convert ${inputPath}:`, error.message);
  }
}

async function run() {
  console.log('🎨 Converting mentor SVG assets to WebP…\n');

  for (const target of targets) {
    const filesToProcess = [];

    if (target.sourceDir) {
      const entries = await fs.promises.readdir(target.sourceDir, { withFileTypes: true });
      entries
        .filter((entry) => entry.isFile() && entry.name.endsWith('.svg'))
        .forEach((entry) => filesToProcess.push(path.join(target.sourceDir, entry.name)));
    }

    if (target.files) {
      filesToProcess.push(...target.files.map((file) => path.join(projectRoot, file)));
    }

    for (const file of filesToProcess) {
      const baseName = path.basename(file, path.extname(file));
      const outputPath = path.join(target.outputDir, `${baseName}.webp`);
      await convertFile(file, outputPath, target);
    }
  }

  console.log('\n✅ Conversion complete.');
}

run().catch((error) => {
  console.error('❌ Fatal error during conversion:', error);
  process.exit(1);
});


