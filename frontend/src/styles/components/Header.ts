import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100vw;
    height: 5vh;

    background-color: ${(props) => props.theme.colors.secondary_background};
`;
