import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';
import mfConfig from './module-federation.config';

const MF2_URL = process.env.MF2_URL || 'http://localhost:3002';

export default defineConfig({
  server: {
    port: 3002,
  },
  output: {
    assetPrefix: MF2_URL + '/',
  },
  plugins: [pluginReact(), pluginModuleFederation(mfConfig)],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
