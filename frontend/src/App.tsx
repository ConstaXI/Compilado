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
import { Header } from './components/Header';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const [check, setCheck] = useState(false);

  const toggleCheck = () => {
    setCheck(!check);
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Header>
          <Switch
            onClick={toggleCheck}
            onChange={toggleCheck}
            checked={theme.title === 'dark'}
            onColor="#414141"
            offColor="#D6D6F6"
            onHandleColor="#782BB7"
            offHandleColor="#782BB7"
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </Header>
        <Routes />
        <Global />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
