import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    ${normalize}
    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%; 
        font-family: sans-serif;
    }

    body {
        font-family: sans-serif;
    }

    .Toastify__toast-body > div:last-child {
        font-size: 1.2rem;
    }
`;