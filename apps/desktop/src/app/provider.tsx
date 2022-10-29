import { CssBaseline, ThemeProvider } from '@mui/material';

import { RouterProvider } from 'atomic-router-react';

import type { FC, PropsWithChildren } from 'react';

import { theme } from '@/shared/config';

import { router } from './router';

const Provider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <RouterProvider router={router}>{children}</RouterProvider>
  </ThemeProvider>
);

export { Provider };
