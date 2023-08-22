import React from 'react';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import {
  createTheme, CssBaseline, responsiveFontSizes, ThemeProvider,
} from '@mui/material';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

function SNiCTheme({ children }: Props) {
  // Todo: include CelerIT font

  let theme = createTheme({
    palette: {
      primary: {
        main: '#12193a',
      },
      secondary: {
        dark: '#12193a',
        main: '#12193a',
        light: '#12193a',
      },
      mode: 'light',
      background: {
        default: '#0c112d',
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default SNiCTheme;
