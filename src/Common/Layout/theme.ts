import { DefaultTheme, createGlobalStyle } from "styled-components";

export const theme: DefaultTheme = {
  main: "rgba(245, 245, 246, 1)",
  background: "rgba(24, 24, 32, 1)",
  todo: {
    light: "rgba(39, 39, 51, 1)",
    dark: "rgba(33, 33, 43, 1)",
  },
  buttons: {
    primary: "rgba(172, 109, 222, 1)",
    secondary: "rgba(24, 24, 32, 1)",
    active: "rgba(65, 64, 82, 1)",
  },
};

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  color: ${(props) => props.theme.main};
}

html, body {
  height: 100%;
  min-height: 100%;
  background-color: ${(props) => props.theme.background};
}

#root {
  height: 100%;
}
`;
