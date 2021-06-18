/* eslint-disable import/no-unresolved */
import React from 'react';
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from 'react-icons/io';
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

const Home: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Sugestions>
        <button name="LogOut" type="button" onClick={signOut}>
          <strong>Log Out</strong>
        </button>
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
          <Perfil>
            <div className="Photo" />
            <PerfilText>
              <h3>Nicolas Cage</h3>
              <p>&quot;Uma experiência que mudou a minha vida&quot; 24/11/2000</p>
            </PerfilText>
          </Perfil>
        </PerfilContainer>
      </People>
      <Compilado>
        <h1 className="Compilado">Compilado_</h1>
      </Compilado>
    </Container>
  );
};

export default Home;
