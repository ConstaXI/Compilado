import React, {
  createContext, useCallback, useState, useContext,
} from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Compilado:token');
    const user = localStorage.getItem('@Compilado:user');

    console.log(`token from localStorage.getItem: ${token}`);
    console.log(`user from localStorage.getItem: ${token}`);

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('auth', {
      email,
      password,
    });

    const { token, user } = response.data;

    console.log(`signIn/user: ${user.name}`);

    localStorage.setItem('@Compilado:token', token);
    localStorage.setItem('@Compilado:user', JSON.stringify(user));

    console.log(`token from localStorage.setItem: ${token}`);
    console.log(`user from localStorage.setItem: ${token}`);

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Compilado:token');
    localStorage.removeItem('@Compilado:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user, signIn, signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  console.log(`context.user:${context.user}`);

  return context;
}

export { AuthProvider, useAuth };