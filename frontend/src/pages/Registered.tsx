/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useAuth } from '../hooks/auth';

const Registered: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <>
      <h1>O pai tá registrado</h1>
    </>
  );
};

export default Registered;
