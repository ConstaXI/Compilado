/* eslint-disable import/no-unresolved */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { IoMdArrowRoundUp, IoMdArrowRoundDown, IoIosSend } from 'react-icons/io';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { parseISO, format } from 'date-fns';
import { Input } from '../components/Input';
import { useAuth } from '../hooks/auth';
import {
  Compilado,
  Container,
  People,
  Perfil,
  PerfilContainer,
  PerfilHeader,
  PerfilText,
  Sugestion,
  SugestionArrows,
  Sugestions,
  SugestionText,
} from '../styles/pages/Home';
import { Button } from '../components/Button';
import api from '../services/api';
import getValidationErrors from '../utils/getValidationErrors';

interface IMessage {
  message: string;
  created_at: string;
  user_id: string;
  user_name: string;
}

interface ISugestion {
  text: string;
  votes: number;
  user_id: string;
  user_name: string;
}

const Home: React.FC = () => {
  const { signOut, user } = useAuth();

  const formRef = useRef<FormHandles>();

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [sugestions, setSugestions] = useState<ISugestion[]>([]);

  useEffect(() => {
    api.get<ISugestion[]>('sugestions').then((response) => setSugestions(response.data));

    api.get<IMessage[]>('messages').then((response) => {
      setMessages(response.data.map((single_message) => ({
        ...single_message,
        created_at: format(
          parseISO(single_message.created_at),
          'dd/MM/yyyy',
        ),
      })));
    });

    console.log('Information loaded');
  }, []);

  const hendleSendMessage = useCallback(async (data: IMessage) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        message: Yup.string().required('Não vai enviar nada?'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/messages', {
        message: data.message,
        user_id: user.id,
      });

      window.location.href = '/home';
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);
      }
    }
  }, [user]);

  const upVote = useCallback(async (id: string) => {
    api.put(`/sugestions/up/${id}`);
  }, []);

  const downVote = useCallback(async (id: string) => {
    api.put(`/sugestions/down/${id}`);
  }, []);

  return (
    <Container>
      <Sugestions>
        <h1>Sugestões</h1>
        <p>Aqui ficam suas sugestões de inutilidades!</p>
        {sugestions.length > 0 ? (
          sugestions.map((sugestion) => (
            <Sugestion>
              <SugestionText>
                <h3>{sugestion.user_name}</h3>
                <p>{sugestion.text}</p>
              </SugestionText>
              <SugestionArrows>
                <Form onSubmit={upVote}>
                  <button type="submit" value="id">
                    <IoMdArrowRoundUp size={40} color="var(--green)" />
                  </button>
                </Form>
                <Form onSubmit={downVote}>
                  <button type="submit" value="id">
                    <IoMdArrowRoundDown size={40} color="red" />
                  </button>
                </Form>
              </SugestionArrows>
              <h2>{sugestion.votes}</h2>
            </Sugestion>
          ))
        ) : (
          <p>Ainda não há sugestões</p>
        )}
      </Sugestions>
      <People>
        <PerfilHeader>
          <IoIosSend size={48} color="var(--primary-purple)" />
          <h2>Mensagens deixadas</h2>
        </PerfilHeader>
        <PerfilContainer>
          {messages.length > 0 ? (
            messages.map((message) => (
              <Perfil>
                <PerfilText>
                  <h3>{message.user_name}</h3>
                  <p>
                    &quot;
                    {message.message}
                    &quot;
                    <br />
                    {message.created_at}
                  </p>
                </PerfilText>
              </Perfil>
            ))
          ) : (
            <p>Seja o primeiro a deixar uma mensagem!</p>
          )}
        </PerfilContainer>
      </People>
      <Compilado>
        <h1 className="Compilado">Compilado_</h1>
        <Form onSubmit={hendleSendMessage}>
          <Input name="message" placeholder="me deixe uma mensagem!" />
          <Button name="Enviar" type="submit" />
        </Form>
        <button name="LogOut" type="button" onClick={signOut}>
          <strong>Log Out</strong>
        </button>
      </Compilado>
    </Container>
  );
};

export default Home;
