import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LoginOrRegister = styled.div`
  padding: 40px 24px;
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  button {
    border: none;
    background-color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`;
