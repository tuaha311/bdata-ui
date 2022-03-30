import { useMemo } from 'react';
import { addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import '../src/assets/fonts/font-styles.css';
import { getAppTheme } from '../src/theme/themeProvider';

import blackLogo from './public/blackLogo.png';
import lightLogo from './public/blackLogo.png';
import GlobalStyle from '../src/quarks/GlobalStyles';

const defaultTheme = {
  brandTitle: 'BData',
  brandUrl: 'https://bdata.ca/',
};

export const parameters = {
  darkMode: {
    dark: { ...themes.dark, ...defaultTheme, brandImage: lightLogo },
    light: { ...themes.light, ...defaultTheme, brandImage: blackLogo },
  },
};

addDecorator(story => {
  const isDarkMode = useDarkMode();

  const theme = useMemo(() => createTheme(getAppTheme(isDarkMode ? 'dark' : 'light')), [isDarkMode]);

  return (
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        {story()}
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
});
