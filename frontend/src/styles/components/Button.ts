import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 20rem;
    padding: 1.5rem;
    height: 1rem;

    border: 4px solid var(--primary-purple);
    background-color: transparent;

    transition: 0.2s;

    strong {
      color: var(--primary-purple);
    }

    &:hover {
      strong {
        color: white;
      }

      text-decoration: none;
      background-color: var(--primary-purple);
    }
  }
`;
