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
      exclude: [/\.(br)$/, /\.(gz)$/, /\.(mp4)$/, /\.(webm)$/],
      threshold: 1024, // Only compress files larger than 1KB
      deleteOriginalAssets: false,
    }),
    // Brotli compression
    compression({
      algorithm: 'brotliCompress',
      exclude: [/\.(br)$/, /\.(gz)$/, /\.(mp4)$/, /\.(webm)$/],
      threshold: 1024,
      deleteOriginalAssets: false,
    }),
  ],
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress eval warnings from lottie-web
        if (warning.code === 'EVAL' && warning.id?.includes('lottie')) {
          return;
        }
        // Use default warning handler for other warnings
        warn(warning);
      },
      output: {
        manualChunks: (id) => {
          // Split BecomeMentor components into separate chunk
          if (id.includes('BecomeMentorComponents')) {
            return 'become-mentor-components';
          }
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
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_methods: true,
      },
      format: {
        comments: false,
      },
      mangle: {
        safari10: true,
      },
    },
    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    // CSS code splitting
    cssCodeSplit: true,
    // CSS minification
    cssMinify: true,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1500,
    // Source maps for production (disabled for smaller bundle)
    sourcemap: false,
    // Target modern browsers for smaller bundles
    target: 'es2015',
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lottie-react',
    ],
    // Handle lottie-web CommonJS properly
    esbuildOptions: {
      resolveExtensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
  // Resolve configuration for lottie-web
  resolve: {
    dedupe: ['lottie-web'],
  },
  // Server configuration
  server: {
    port: 5173,
  },
})
