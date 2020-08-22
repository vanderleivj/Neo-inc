import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #213653;
    -webkit-font-smoothing: antialiased;
  }

  body, -moz-user-input, button {
    font: 16px Helvetica Neue, sans-serif;
  }

  #root {
    margin: 0 auto;
    padding:40px 20px
  }
`;
