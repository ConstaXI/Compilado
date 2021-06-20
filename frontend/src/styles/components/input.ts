import styled from 'styled-components';
import Tooltip from '../../components/Tooltip';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    width: 20rem;
    height: 2.6rem;

    outline: none;

    padding-left: 1rem;
    padding-right: 0.8rem;

    border: none;
    border-bottom: 2px solid var(--grey-500);

    margin-bottom: 1.2rem;

    &:focus {
      border-color: var(--primary-purple);
    }
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
    color: #ff0000;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
