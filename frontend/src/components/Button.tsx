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
  ...rest
}: ButtonProps): React.ReactElement {
  return (
    <ButtonContainer>
      <button className="button" type={type} {...rest}>
        <strong>{name}</strong>
      </button>
    </ButtonContainer>
  );
}
