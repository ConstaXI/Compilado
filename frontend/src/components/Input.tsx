interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

import { ChangeEventHandler } from "react";

import { Container, InputContent } from "../styles/components/input";

export function Input({
  name,
  type,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <Container>
      <InputContent>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </InputContent>
    </Container>
  );
}
