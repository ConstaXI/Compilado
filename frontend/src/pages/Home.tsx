/* eslint-disable no-plusplus */
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
  user_name: string
}

interface ISuggestion {
  id: string;
  text: string;
  votes: number;
  user_id: string;
  user_name: string;
}

const Home: React.FC = () => {
  const { signOut, user } = useAuth();

  const formRef = useRef<FormHandles>();

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [suggestions, setSuggestions] = useState<ISuggestion[]>([]);

  useEffect(() => {
    api.get<ISuggestion[]>('suggestions').then((response) => setSuggestions(response.data));

    api.get<IMessage[]>('messages').then((response) => {
      setMessages(response.data.map((single_message) => ({
        ...single_message,
        created_at: format(
          parseISO(single_message.created_at),
          'dd/MM/yyyy',
        ),
      })));
    });

    console.log('information loaded');
  }, []);

  const handleSendMessage = useCallback(async (data: IMessage) => {
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
      }).then(() => {
        api.get<IMessage[]>('messages').then((response) => {
          setMessages(response.data.map((single_message) => ({
            ...single_message,
            created_at: format(
              parseISO(single_message.created_at),
              'dd/MM/yyyy',
            ),
          })));
        });
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);
      }
    }
  }, [user.id]);

  const upVote = useCallback(async (suggestion: ISuggestion) => {
    const hasVoted = await api.get<boolean>(`/votes/${user.id}&${suggestion.id}`).then((response) => response.data);

    if (hasVoted) {
      alert('Você já votou');
    } else {
      api.post('/suggestions/up', {
        suggestion_id: suggestion.id,
        user_id: user.id,
      }).then(() => {
        api.get<ISuggestion[]>('suggestions').then((response) => setSuggestions(response.data));
      });
    }
  }, [user]);

  const downVote = useCallback(async (suggestion: ISuggestion) => {
    const hasVoted = await api.get<boolean>(`/votes/${user.id}&${suggestion.id}`).then((response) => response.data);

    if (hasVoted) {
      alert('Você já votou');
    } else {
      api.post('/suggestions/down', {
        suggestion_id: suggestion.id,
        user_id: user.id,
      }).then(() => {
        api.get<ISuggestion[]>('suggestions').then((response) => setSuggestions(response.data));
      });
    }
  }, [user]);

  return (
    <Container>
      <Sugestions>
        <h1>Sugestões</h1>
        <p>Aqui ficam suas sugestões de inutilidades!</p>
        {suggestions.length > 0 ? (
          suggestions.map((suggestion) => (
            <Sugestion>
              <SugestionText>
                <h3>{suggestion.user_name}</h3>
                <p>{suggestion.text}</p>
              </SugestionText>
              <SugestionArrows>
                <button type="button" onClick={() => upVote(suggestion)}>
                  <IoMdArrowRoundUp size={40} color="var(--green)" />
                </button>
                <button type="button" onClick={() => downVote(suggestion)}>
                  <IoMdArrowRoundDown size={40} color="red" />
                </button>
              </SugestionArrows>
              <h2>{suggestion.votes}</h2>
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
        <Form onSubmit={handleSendMessage}>
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
