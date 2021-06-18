import styled from 'styled-components';
import Tooltip from '../../components/Tooltip';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  input {
    width: 20rem;
    height: 2.6rem;

    padding-left: 1rem;
    padding-right: 0.8rem;
    border: 0vh;

    border-bottom: 2px solid black;

    margin-bottom: 1.2rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 20px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
