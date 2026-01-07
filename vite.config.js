// vite.config.js - Performance Optimizations
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    // Bundle analyzer (optional - generates stats.html)
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Proxy API requests to PHP backend
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },

  build: {
    // Code splitting configuration
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": ["lucide-react", "react-hot-toast"],

          // CMS components
          cms: [
            "./src/pages/CMS/CourseEditor.jsx",
            "./src/pages/CMS/Dashboard.jsx",
            "./src/components/CMSComponents/ApplyNowModal.jsx",
            "./src/components/CMSComponents/TextHighlighter.jsx",
            "./src/components/CMSComponents/IconSelector.jsx",
          ],

          // Landing page components
          landing: [
            "./src/pages/LandingPages/TransformationTemplate.jsx",
            "./src/components/LandingPageComponents/TestimonialCard.jsx",
            "./src/components/LandingPageComponents/FAQItem.jsx",
          ],
        },
      },
    },

    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,

    // Minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },

    // Source maps (disable in production for smaller size)
    sourcemap: false,

    // CSS code splitting
    cssCodeSplit: true,
  },

  // Optimization
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
