import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --green: #00FF00;
        --red: #FF0000;

        --primary-purple: #5E6EFF;
        --secondary-purple: #8894FF;

        --grey-50: #F7F8FA;
        --grey-100: #E6E8EB;
        --grey-200: #AFB2B1;
        --grey-500: #808080;
        --grey-800: #494D4B;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%; // 15px
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%; // 14px
        }
    }

    body, input, textarea, button {
        font: 500 1rem Poppins, sans-serif;
        color: var(--grey-500);
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        font-family: Poppins, sans-serif;
        color: var(--grey-800);
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    button {
        cursor: pointer;
    }
`;
