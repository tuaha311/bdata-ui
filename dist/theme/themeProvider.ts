import { lightPalette, darkPalette, standardPalette } from './colorPalettes';
import { typography } from './typography';
import { lightButton, darkButton } from '../molecules/Button/button.theme';

export const getAppTheme = (mode: 'light' | 'dark') => {
  const isDark = mode === 'dark';
  return {
    components: {
      ...(isDark ? darkButton : lightButton),
    },
    palette: {
      mode,
      ...(isDark ? darkPalette : lightPalette),
      ...standardPalette,
    },
    ...typography,
  };
};

export type AppTheme = ReturnType<typeof getAppTheme>;
