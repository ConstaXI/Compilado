/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import Switch from 'react-switch';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Global from './styles/global';
import Routes from './routes/index';
import { AuthProvider } from './hooks/auth';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import usePersistedState from './utils/usePersistedState';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const [check, setCheck] = useState(false);

  const toggleCheck = () => {
    setCheck(!check);
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Switch
        onClick={toggleCheck}
        onChange={toggleCheck}
        checked={theme.title === 'light'}
      />
      <AuthProvider>
        <Routes />
        <Global />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
