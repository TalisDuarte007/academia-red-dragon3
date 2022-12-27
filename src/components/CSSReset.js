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
    background: url(https://media.istockphoto.com/id/1303559463/pt/foto/carbon-fiber-texture-new-technology-background.jpg?s=612x612&w=0&k=20&c=HkmwvbPNWx9Spme5jHX07KprEccEdpvFSgeav5qwZkg=) repeat center center fixed;
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