import { createModuleFederationConfig } from '@module-federation/enhanced';

const MF2_URL = process.env.MF2_URL || 'http://localhost:3002';

const mfConfig = createModuleFederationConfig({
  name: 'host',
  remotes: {
    remote: `remote@${MF2_URL}/remoteEntry.js`,
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
