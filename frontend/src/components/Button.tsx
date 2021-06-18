/* eslint-disable react/button-has-type */
import React from 'react';

import { ButtonContainer } from '../styles/components/Button';

interface ButtonProps {
    name: string;
    type: 'button' | 'submit';
}

export function Button({
  name,
  type,
}: ButtonProps): React.ReactElement {
  return (
    <ButtonContainer>
      <button className="button" type={type}>
        <strong>{name}</strong>
      </button>
    </ButtonContainer>
  );
}
