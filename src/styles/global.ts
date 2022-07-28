import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
    font-size: 10px;
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::selection {
      color: #fff;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  body {
    font-family: 'Lato', sans-serif;
    font-weight: ${({ theme }) => theme.typography.regular};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.txt};
  }

  ul {
    list-style: none;
  }

  a,
  button,
  input {
    font-family: inherit;
    margin: 0;
    transition: 0.2s;
    color: inherit;
  }

  a {
    text-decoration: none;
  }
`;
