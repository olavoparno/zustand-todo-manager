import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./Common/Layout/theme";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function ThemedApp() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.render(
  <StrictMode>
    <ThemedApp />
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
