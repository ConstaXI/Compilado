import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 100vh;

  button {
    border: none;
    background-color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Compilado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-left: 24px;

  .Compilado {
    font-size: 6em;
    color: var(--primary-purple);
  }

  button {
    padding-top: 32px;
  }
`;

export const People = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  height: 100vh;
`;

export const PerfilHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;

  width: 25vw;

  hr {
    width: 100%;
    height: 2px;
    background-color: var(--grey-100);
    border: none;
  }

  h2,
  p {
    padding: 6px;
  }
`;

const fadeInAnimation = keyframes`${fadeInLeft}`;

export const Perfil = styled.div`
  display: flex;
  flex-direction: row;

  &:hover {
    background-color: var(--grey-50);
  }

  animation: 1s ${fadeInAnimation};

  padding: 8px 16px;
`;

export const PerfilText = styled.div`
  display: flex;
  flex-direction: column;

  text-align: left;
`;

export const PerfilContainer = styled.div`
  height: 100vh;
  overflow: auto;
  width: 100%;
`;

export const Sugestions = styled.div`
  width: 30vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: auto;
  height: 100vh;
`;

export const Sugestion = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 16px;
  margin: 24px;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const SugestionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SugestionArrows = styled.div`
  display: flex;
  flex-direction: column;
`;
