import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    display: flex;
    flex: 1;
    font-family: 'Oswald', sans-serif;
    background-color: #3a3a39;
    color: black;
    display: flex;
    background: url(https://uploaddeimagens.com.br/images/004/275/823/original/%E2%80%94Pngtree%E2%80%94carbon_fiber_modern_dark_black_1576247.png?1672181168) repeat center center fixed;
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;