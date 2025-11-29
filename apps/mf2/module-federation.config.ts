import { createModuleFederationConfig } from '@module-federation/enhanced';
import { dependencies } from './package.json';

const mfConfig = createModuleFederationConfig({
  name: 'remote',
  exposes: {
    './Csa': './src/App.tsx',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
});

export default mfConfig;
