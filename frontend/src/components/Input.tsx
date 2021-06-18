import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import { Container, InputContent } from '../styles/components/input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholder: string;
}

export function Input({
  name,
  type,
  placeholder,
}: InputProps): React.ReactElement {
  const { fieldName, defaultValue, registerField } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      <InputContent>
        <input
          type={type}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          ref={inputRef}
        />
      </InputContent>
    </Container>
  );
}
