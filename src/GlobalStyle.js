import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
  --blue: #1e90ff;
  --white: #ffffff;
  --primary_color: #CF985F;
  --icon_background: rgb(216, 183, 167);
  --icon_foreground: #241815;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
    font-size: 18px;
    color: var(--primary_color);
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004) !important;
    background-color: black;
    overflow: hidden;
  }

  .app {
    display: flex;
    /* overflow: hidden; */
    height: 100vh;
  }
`;
export default GlobalStyle;
