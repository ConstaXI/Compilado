import React, { useState, FormEvent, ChangeEvent, useCallback } from "react";

import {
  Compilado,
  Container,
  Form,
  LoginOrRegister,
  People,
  Perfil,
  PerfilContainer,
  PerfilHeader,
  PerfilText,
} from "../styles/pages";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import api from "../services/api";
import { useRef } from "react";
import { FormHandles } from "@unform/core";

interface ICreateUserForm {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export default function Home() {
  const formRef = useRef<FormHandles>(null);

  const [isOpen, setIsOpen] = useState(false);

  function openRegister(): void {
    setIsOpen(!isOpen);
  }

  const handleSubmit = useCallback(
    async (data: ICreateUserForm) => {
      try {
        formRef.current?.setErrors({});

        console.log(data);

        await api.post("users", data);
      } catch(e) {
        console.log((e as Error).message);
      }
    }, []
  )

  function RenderRegisterOrLogin(props): React.ReactElement {
    const wasClicked = props.isOpen;

    if(!wasClicked) {
      return (
        <LoginOrRegister>
          <h1>Login</h1>
          <Form>
            <Input name="email" placeholder="Email" type="email" />
            <Input name="password" placeholder="Senha" type="password" />
            <Button name="Entrar" type="submit" />
          </Form>
          <p>Esqueci minha senha</p>
          <button onClick={openRegister}><strong>Criar uma conta</strong></button>
        </LoginOrRegister>
      );
    } else {
      return (
        <LoginOrRegister>
          <h1>Registrar</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Primeiro Nome" type="name" />
            <Input name="surname" placeholder="Segundo Nome" type="surname" />
            <Input name="email" placeholder="Email" type="email" />
            <Input name="password" placeholder="Senha" type="password" />
            <Button name="Confirmar" type="submit" />
          </Form>
          <button onClick={openRegister}><strong>Voltar para Login</strong></button>
        </LoginOrRegister>
      );
    }
  }

  return (
    <Container>
      <People>
        <PerfilHeader>
          <h2>Pessoas já cadastradas</h2>
          <p>
            Venha fazer parte você também. O site é completamente inútil, porém
            muito divertido e esteticamente bonito (bem... eu tentei)
          </p>
          <hr />
        </PerfilHeader>
        <PerfilContainer>
          <Perfil>
            <div className="Photo" />
            <PerfilText>
              <h3>Nicolas Cage</h3>
              <p>"Uma experiência que mudou a minha vida" 24/11/2000</p>
            </PerfilText>
          </Perfil>
        </PerfilContainer>
      </People>
      <Compilado>
        <h1 className="Compilado">Compilado_</h1>
        <RenderRegisterOrLogin isOpen={isOpen}>
          <h1>Login</h1>
          <Form>
            <Input name="email" placeholder="Email" type="email" />
            <Input name="password" placeholder="Senha" type="password" />
            <Button name="Entrar" type="submit" />
          </Form>
          <p>Esqueci minha senha</p>
          <button onClick={openRegister}><strong>Criar uma conta</strong></button>
        </RenderRegisterOrLogin>
      </Compilado>
    </Container>
  );
}
