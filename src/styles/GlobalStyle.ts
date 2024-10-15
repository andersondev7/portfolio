import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: #08080c;
    color: ${({ theme }) => theme.text};

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    font-family: "Inter", sans-serif;


    html, body {
    overflow-x: hidden;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;

    -webkit-font-smoothing: antialiased; 
  }

  input, select { 
    font-family: "Inter" ,sans-serif;    
  }

  button {
    cursor: pointer;
  }

   a  {
text-decoration: none;
cursor: pointer;
   }

   h1, h2, h3, h4, h5, h6, p  {
    margin: 0;

   }
  }
`;
