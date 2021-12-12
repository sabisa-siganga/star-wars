import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital@1&family=Roboto:wght@100;300;400;500;700&display=swap');

    body {
        background-color: #fcfcfc;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
    }
`;

export default GlobalStyles;
