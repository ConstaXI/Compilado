import React, { PropsWithChildren, ReactNode } from 'react';
import { Container } from '../styles/components/Header';

interface HeaderProps {
    children: ReactNode;
}

export const Header: React.FC<PropsWithChildren<HeaderProps>> = ({ children }) => (
  <header>
    <Container>
      {children}
    </Container>
  </header>
);
