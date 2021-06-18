import React, {
  useRef, useCallback, useState, ReactElement,
} from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/auth';
import api from '../services/api';
import { Container, LoginOrRegister } from '../styles/pages/Login';
import { Input } from '../components/Input';

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

      await api.post('users', data);
      window.location.href = '/home';
      await signIn({ ...data });
    } catch (e: any) {
      alert(e.message);
    }
  }, [signIn]);

  const handleLoginSubmit = useCallback(async (data: ILogIn) => {
    try {
      formRef.current?.setErrors({});

      await signIn(data);
      window.location.href = '/home';
    } catch (e: any) {
      alert(e.message);
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
          <p>Esqueci minha senha</p>
          <button onClick={openRegister} type="button">
            <strong>Criar uma conta</strong>
          </button>
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
      <RenderRegisterOrLogin wasClicked={isOpen} />
    </Container>
  );
};

export default Login;
