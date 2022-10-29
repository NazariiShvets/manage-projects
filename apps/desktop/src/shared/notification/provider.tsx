import { SnackbarProvider } from 'notistack';

import type { FC, PropsWithChildren } from 'react';

import { AUTO_HIDE_DURATION, MAX_STACK } from './config';

import { NotificationStack } from './ui';

const NotificationProvider: FC<PropsWithChildren> = ({ children }) => (
  <SnackbarProvider maxSnack={MAX_STACK} autoHideDuration={AUTO_HIDE_DURATION}>
    <NotificationStack />

    {children}
  </SnackbarProvider>
);

export { NotificationProvider };
