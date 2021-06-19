import React, {
  useRef, useCallback, useState, ReactElement,
} from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/auth';
import api from '../services/api';
import {
  Container, LoginOrRegister, Compilado, Misc,
} from '../styles/pages/Login';
import { Input } from '../components/Input';
import getValidationErrors from '../utils/getValidationErrors';

interface ICreateUserForm {
  name: string;
  surname: string;
  email: string;
  password: string;
}

interface ILogIn {
  email: string;
  password: string;
}

interface ILoginOrRegisterProps {
  wasClicked: boolean;
}

const Login: React.FC = () => {
  const { signIn } = useAuth();

  const formRef = useRef<FormHandles>(null);

  const [isOpen, setIsOpen] = useState(false);

  function openRegister(): void {
    setIsOpen(!isOpen);
  }

  const handleRegisterSubmit = useCallback(async (data: ICreateUserForm) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        surname: Yup.string().required('Sobrenome obrigatório'),
        email: Yup.string().email().required('Email obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('users', data);
      await signIn({ ...data });
      window.location.href = '/home';
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);
      }
    }
  }, [signIn]);

  const handleLoginSubmit = useCallback(async (data: ILogIn) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().email(),
        password: Yup.string().required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn(data);
      window.location.href = '/home';
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);
      }
    }
  }, [signIn]);

  const RenderRegisterOrLogin = ({ wasClicked }: ILoginOrRegisterProps): ReactElement => {
    if (!wasClicked) {
      return (
        <LoginOrRegister>
          <h1>Login</h1>
          <Form onSubmit={handleLoginSubmit}>
            <Input name="email" placeholder="Email" type="email" />
            <Input name="password" placeholder="Senha" type="password" />
            <Button name="Entrar" type="submit" />
          </Form>
          <Misc>
            <button type="button">
              <strong>Esqueci minha senha</strong>
            </button>
            <button onClick={openRegister} type="button">
              <strong>Criar uma conta</strong>
            </button>
          </Misc>
        </LoginOrRegister>
      );
    }

    return (
      <LoginOrRegister>
        <h1>Registrar</h1>
        <Form ref={formRef} onSubmit={handleRegisterSubmit}>
          <Input name="name" placeholder="Primeiro Nome" type="name" />
          <Input name="surname" placeholder="Segundo Nome" type="surname" />
          <Input name="email" placeholder="Email" type="email" />
          <Input name="password" placeholder="Senha" type="password" />
          <Button name="Confirmar" type="submit" />
        </Form>
        <button onClick={openRegister} type="submit">
          <strong>Voltar para Login</strong>
        </button>
      </LoginOrRegister>
    );
  };

  return (
    <Container>
      <Compilado>
        <h1 className="Compilado">Compilado_</h1>
      </Compilado>
      <RenderRegisterOrLogin wasClicked={isOpen} />
    </Container>
  );
};

export default Login;
