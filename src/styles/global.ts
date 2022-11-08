import { createGlobalStyle } from 'styled-components';

export const GlobalCSS = createGlobalStyle`
    #__next {
        height: 100vh;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, input, button {
        font-family: Roboto, sans-serif;
    }
`;
