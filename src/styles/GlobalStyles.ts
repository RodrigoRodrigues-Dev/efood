import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    font-size: 14px;
    background-color: rgb(${colors.BackGround});
    color: rgb(${colors.PrimaryColor1});
  }
`;
