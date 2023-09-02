import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
    }

    body {
       background-color: #27AE60;
    }

    input[type="text"]::-webkit-input-placeholder {
          color: #fff;
    }

    textarea::-webkit-input-placeholder {
          color: white;
    }
`

export default GlobalStyle