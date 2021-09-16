import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html {
    font-size: 62.5%; /* 1rem = 10px */
    height: 100%;
    @media (min-width: 1981px) {
      font-size: 80%;
    };
  }
  body {
    font-family: 'Roboto, sans-serif';
  }
  a {
    background: transparent;
    border: 0;

    text-decoration: none;
    font-weight: 700;
    color: inherit;

    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;

    transition: 180ms ease-in-out;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: 0;

    text-align: center;
    color: inherit;


    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
  }
`;
