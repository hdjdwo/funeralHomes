import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      textDark: string;
      textLight: string;
      border: string;
      background: string;
      white: string;
      error: string;
      success: string;
    };
    shadows: {
      card: string;
      button: string;
    };
  }
}