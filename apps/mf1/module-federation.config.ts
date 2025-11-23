import { createModuleFederationConfig } from '@module-federation/enhanced';
import { dependencies } from './package.json';

const mfConfig = createModuleFederationConfig({
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:3002/remoteEntry.js',
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
