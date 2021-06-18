import React from 'react';

import Global from './styles/global';

import Routes from './routes/index';
import { AuthProvider } from './hooks/auth';

const App: React.FC = () => (
  <AuthProvider>
    <Routes />
    <Global />
  </AuthProvider>
);

export default App;
