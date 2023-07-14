import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  html,
body {
  font-family: "SpoqaHanSansNeo", sans-serif;
  font-weight: 400;
    font-size: 16px;
}

  a {
  color: inherit;
  text-decoration: none;
  }
  
  li {
  list-style: none;
  }

  button{
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  
  }
`;

export default GlobalStyle;
