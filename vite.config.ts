import vue              from '@vitejs/plugin-vue';
import path             from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname
    },
  },
  build: {
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'IOLibrary',
      fileName: (format) => `io-library.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue'
      ],
      output: {
        globals: {
          vue: 'Vue' 
        },
      },
    },
  },
});