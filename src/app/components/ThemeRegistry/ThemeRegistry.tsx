'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { AlertColor } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

declare module 'notistack' {
  // eslint-disable-next-line no-unused-vars
  interface VariantOverrides {
    toastAlert: {
      title?: string;
      message?: string;
      severity?: AlertColor;
    };
  }
}

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
