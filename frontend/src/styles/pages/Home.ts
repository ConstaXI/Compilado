import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

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
  align-items: flex-start;

  padding-left: 24px;

  .Compilado {
    font-size: 8rem;
    color: var(--primary-purple);
  }
`;

export const People = styled.div`
  width: 25vw;
  padding: 0 8px 0 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  max-height: 100vh;
`;

export const PerfilHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 25vw;

  hr {
    width: 100%;
    height: 2px;
    background-color: var(--grey-100);
    border: none;
  }

  h2,
  p {
    padding: 4px;
  }
`;

export const Perfil = styled.div`
  display: flex;
  flex-direction: row;

  padding: 8px;

  .Photo {
    margin: 0 8px 0 8px;
    width: 96px;
    height: 64px;
    background-color: var(--primary-purple);
  }
`;

export const PerfilText = styled.div`
  display: flex;
  flex-direction: column;

  text-align: left;
`;

export const PerfilContainer = styled.div`
  height: 90vh;
  overflow: auto;
`;

export const Form = styled(Unform)`
  padding: 32px 0;
`;

export const Sugestions = styled.div`
  width: 25vw;

  display: flex;
  flex-direction: column;
  align-items: center;
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