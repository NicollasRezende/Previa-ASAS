import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-100: #7a1fa2;
    --primary-200: #9a27cd;
    --primary-300: #b04bdc;
    --accent-100: #ffffff;
    --accent-200: #ffffff;
    --accent-300: #ffffff;
    --background-100: #0c0310;
    --background-200: #1c0725;
    --background-300: #2c0b3b;
    --text-100: #fdfcfe;
    --text-200: #f0e9f8;
    --text-300: #e4d6f1;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--background-100);
    color: var(--text-100);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    line-height: 1.8;
  }

  a {
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  button {
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    border: none;
    outline: none;
  }

  input, textarea, select {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
  }
`;
