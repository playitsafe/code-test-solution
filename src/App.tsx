import React from 'react';
import { ThemeProvider } from 'styled-components'
import Article from './containers/Article';
import GlobalStyle from "./styles/Global"

const theme = {
  breakpoints: {
    desktop: '1200px',
    tab: '768px',
    mobile: '480px'
  }
}

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Article />
  </ThemeProvider>
);


export default App;
