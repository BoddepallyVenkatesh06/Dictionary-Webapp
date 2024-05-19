import { createGlobalStyle } from "styled-components";
import { CSS_VARS } from "../helpers/constants";
import { createCSSVars } from "../helpers/createCSSVars";
import "./fonts.css";
import "./normalise.css";

const GlobalStyle = createGlobalStyle`

  :root {
    ${createCSSVars(CSS_VARS)};
  }

  body {
    font-family: var(--theme-font);
    background: var(--background-page);
    color: var(--text-body);
    font-size: var(--font-size-s)
  }

  a {
    color: var(--colour-secondary-500)
  }

  a:visited {
    color: var(--colour-secondary-700)
  }

  a:hover, a:focus {
    filter: brightness(120%) saturate(120%);
  }

  a:focus-visible {
    outline: currentColor 2px solid;
    outline-offset: 3px;
  }
`;

export default GlobalStyle;
