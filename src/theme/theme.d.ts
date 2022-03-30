import { AppTheme } from './themeProvider';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {
    [key: string]: never;
  }
}
