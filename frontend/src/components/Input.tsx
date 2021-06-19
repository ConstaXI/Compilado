/* eslint-disable import/no-unresolved */
import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { Error, Container, InputContent } from '../styles/components/Input';

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
  const {
    fieldName, defaultValue, registerField, error,
  } = useField(name);
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

        {error && (
          <Error title={error}>
            <FiAlertCircle size={20} color="#C53030" />
          </Error>
        )}
      </InputContent>
    </Container>
  );
}
