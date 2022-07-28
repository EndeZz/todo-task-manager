import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      primaryActive: string;
      gray100: string;
      gray200: string;
      gray300: string;
      txt: string;
      light: string;
    };
    media: {
      xl: string;
      lg: string;
      md: string;
      sm: string;
    };
    typography: {
      regular: string;
      bold: string;
    };
  }
}
