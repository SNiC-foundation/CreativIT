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
        dark: '#91288D',
        main: '#483291',
        light: '#91288D',
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
