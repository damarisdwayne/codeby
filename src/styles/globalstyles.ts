import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  button, input {
    font-family: Inter, Sans-Serif;
    outline: 0;
    border: 0;
  }

  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: Inter, Sans-Serif;
    overflow-x: hidden;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
}
`;
 
export default GlobalStyle;