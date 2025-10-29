import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  // IMPORTANT: اسم ریپو / path دقیقِ GitHub Pages رو اینجا قرار بده
  base: '/Site-2/',

  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  optimizeDeps: {
    include: [
      'lucide-react',
      'class-variance-authority',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-avatar',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-collapsible',
      '@radix-ui/react-context-menu',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card',
      '@radix-ui/react-label',
      '@radix-ui/react-menubar',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-progress',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slider',
      '@radix-ui/react-slot',
      '@radix-ui/react-switch',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group',
      '@radix-ui/react-tooltip',
      'react-hook-form',
      'react-day-picker',
      'embla-carousel-react',
      'cmdk',
      'class-variance-authority',
      'input-otp',
      'sonner',
      'vaul',
      'recharts',
      'react-resizable-panels',
      'next-themes',
    ],
  },

  build: {
    target: 'esnext',
    outDir: 'build',
    rollupOptions: {
      external: [], // مطمئن شو بسته‌ها external نیستند
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});
