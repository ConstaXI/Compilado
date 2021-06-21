import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      primary_background: string;
      secondary_background: string;
      text: string;
    };
  }
}
