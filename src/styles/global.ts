import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
    font-size: 10px;
    height: 100%;

    @media only screen and (max-width: ${({ theme }) => theme.media.sm}) {
      font-size: 8px;
    }
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

    /* Works on Firefox*/
    scrollbar-color: ${({ theme }) => theme.colors.primary};
    scrollbar-width: thin;
    /* Works on Chrome, Edge, and Safari*/
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      border-radius: 15px;
      background-color: ${({ theme }) => theme.colors.gray100};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.gray200};
      border-radius: 15px;
      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
      }
    }

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
