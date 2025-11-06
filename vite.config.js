import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import { compression } from 'vite-plugin-compression2'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    imagetools(),
    // Gzip compression
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$/, /\.(gz)$/],
      threshold: 1024, // Only compress files larger than 1KB
    }),
    // Brotli compression
    compression({
      algorithm: 'brotliCompress',
      exclude: [/\.(br)$/, /\.(gz)$/],
      threshold: 1024,
    }),
  ],
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React vendor chunk
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          // Router vendor chunk
          if (id.includes('node_modules/react-router')) {
            return 'router-vendor';
          }
          // Animation libraries chunk
          if (id.includes('node_modules/lottie') || 
              id.includes('node_modules/react-fast-marquee') ||
              id.includes('node_modules/framer-motion')) {
            return 'animation-vendor';
          }
          // UI libraries chunk
          if (id.includes('node_modules/react-hot-toast') ||
              id.includes('node_modules/react-icons') ||
              id.includes('node_modules/lucide-react')) {
            return 'ui-vendor';
          }
          // Utilities chunk
          if (id.includes('node_modules/axios') ||
              id.includes('node_modules/js-cookie')) {
            return 'utils-vendor';
          }
          // Large vendor libraries
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Optimize chunk file names for better caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Use terser for better minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2, // Multiple passes for better compression
      },
      format: {
        comments: false,
      },
    },
    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    // CSS code splitting
    cssCodeSplit: true,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Source maps for production (disabled for smaller bundle)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lottie-react',
      'lottie-web',
    ],
  },
})
