import { useGate } from 'effector-react';

import { useSnackbar } from 'notistack';

import { createView } from '@/shared/lib/view';

import { NotificationGate } from './model';

const NotificationStack = createView()
  .effect(() => useGate(NotificationGate, useSnackbar()))
  .view(() => null);

export { NotificationStack };
