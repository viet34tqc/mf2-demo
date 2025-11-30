import { createModuleFederationConfig } from '@module-federation/enhanced';

const mfConfig = createModuleFederationConfig({
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:3002/remoteEntry.js',
  },
  filename: 'remoteEntry.js',
  shared: {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
    'react-router-dom': {
      singleton: true,
    },
  },
});

export default mfConfig;
