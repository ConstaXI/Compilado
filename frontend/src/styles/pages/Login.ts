import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const fadeInAnimation = keyframes`${fadeInUp}`;

export const Compilado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-left: 24px;

  animation: 1s ${fadeInAnimation};

  .Compilado {
    font-size: 8rem;
    color: var(--primary-purple);
  }
`;

export const LoginOrRegister = styled.div`
  padding: 40px 24px;
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  animation: 1s ${fadeInAnimation};

  h1 {
    padding-bottom: 32px;
  }
`;

export const Misc = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 48px;

  button {
    border: none;
    background-color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`;
