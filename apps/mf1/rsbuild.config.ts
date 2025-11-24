import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';
import mfConfig from './module-federation.config';

export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [pluginReact(), pluginModuleFederation(mfConfig)],
  source: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@mf/ui': path.resolve(__dirname, '../../packages/ui/src'),
    },
  },
});
