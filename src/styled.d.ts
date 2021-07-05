import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    main: string;
    background: string;
    todo: {
      light: string;
      dark: string;
    };
    buttons: {
      primary: string;
      secondary: string;
      active: string;
    };
  }
}
