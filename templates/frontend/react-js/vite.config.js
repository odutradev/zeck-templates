import eslintPlugin from "vite-plugin-eslint";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [react(), eslintPlugin()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@actions': path.resolve(__dirname, './src/actions'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  server: {
    hmr: {
      overlay: true,
    },
    strictPort: true,
    port: 1000,
    open: true,
    cors: true,
  },
  build: {
    outDir: "build",
    minify: "esbuild",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
    target: "esnext",
    chunkSizeWarningLimit: 500,
  },
});
