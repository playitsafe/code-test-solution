import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Merriweather', sans-serif;
  }

  h1 {
    font-size: 36px;
    font-weight: 300;
  }

  #root {
    margin: 0 auto;
  }
`