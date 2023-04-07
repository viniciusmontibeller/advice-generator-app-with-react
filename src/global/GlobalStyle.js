import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
    background-color: ${props => props.theme.colors.backgroundColor};
  }
`

export { GlobalStyle }