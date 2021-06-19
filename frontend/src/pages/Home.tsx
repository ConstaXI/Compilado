/* eslint-disable import/no-unresolved */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from 'react-icons/io';
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

const Home: React.FC = () => {
  const { signOut, user } = useAuth();

  const formRef = useRef<FormHandles>(null);

  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    async function loadMessages() {
      const response = await api.get<IMessage[]>('/messages');

      const formattedMessages = response.data.map((single_message) => ({
        ...single_message,
        created_at: format(
          parseISO(single_message.created_at),
          'dd/MM/yyyy',
        ),
      }));

      setMessages(formattedMessages);
    }

    loadMessages();
  });

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

      formRef.current?.reset();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);
      }
    }
  }, [user]);

  return (
    <Container>
      <Sugestions>
        <h1>Sugestões</h1>
        <p>Aqui ficam suas sugestões de inutilidades!</p>
        <Sugestion>
          <SugestionText>
            <h3>Nicolas Cage</h3>
            <p>
              Por favor, Davi, gostaria muito que você exposse os segredos que a
              NASA anda escondendo de nós!
            </p>
          </SugestionText>
          <SugestionArrows>
            <IoMdArrowRoundUp size={40} color="var(--green)" />
            <IoMdArrowRoundDown size={40} color="red" />
          </SugestionArrows>
          <h2>25</h2>
        </Sugestion>
        <Sugestion>
          <SugestionText>
            <h3>Nicolas Cage</h3>
            <p>
              Por favor, Davi, gostaria muito que você exposse os segredos que a
              NASA anda escondendo de nós!
            </p>
          </SugestionText>
          <SugestionArrows>
            <IoMdArrowRoundUp size={40} color="var(--green)" />
            <IoMdArrowRoundDown size={40} color="red" />
          </SugestionArrows>
          <h2>12</h2>
        </Sugestion>
        <Sugestion>
          <SugestionText>
            <h3>Rodrigo Hilbert</h3>
            <p>
              Bom dia, Davi! Que tal se você colocasse uma parte contando sobre
              as nossas aventuras na Amazônia e postando algumas fotos? Seria
              bacana!
            </p>
          </SugestionText>
          <SugestionArrows>
            <IoMdArrowRoundUp size={40} color="var(--green)" />
            <IoMdArrowRoundDown size={40} color="red" />
          </SugestionArrows>
          <h2>4</h2>
        </Sugestion>
      </Sugestions>
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
          <Input name="message" type="message" placeholder="me deixe uma mensagem!" />
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
