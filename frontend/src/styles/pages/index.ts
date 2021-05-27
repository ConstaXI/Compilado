import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const Login = styled.div`
  padding: 40px 24px;
  margin: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
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
`

export const PerfilHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  width: 25vw;

  hr {
    width: 100%;
    height: 4px;
    background-color: var(--grey-800);
  }

  h2 {
    padding-top: 8px;
  }
`

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
`

export const PerfilText = styled.div`
  display: flex;
  flex-direction: column;

  text-align: left;
`

export const PerfilContainer = styled.div`
  height: 90vh;
  overflow: auto;

  hr {
    width: 100%;
    height: 2px;
    background-color: var(--grey-500);
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Form = styled(Unform)`
    padding: 32px  0;
`;
