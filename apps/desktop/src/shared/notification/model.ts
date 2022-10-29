import type { AlertProps } from '@mui/material';

import type { Event, Store } from 'effector';

import { attach, createStore, restore, sample } from 'effector';

import { createGate } from 'effector-react';

import { nanoid } from 'nanoid';

import type { ProviderContext as StackModel } from 'notistack';

type UUID = string;
type Severity = AlertProps['severity'];
type Notification = { id: UUID; mode: Severity; message: string };

const NotificationGate = createGate<StackModel>();

const $notistack = restore(NotificationGate.open, null).reset(
  NotificationGate.close
);

const displayNotificationFx = attach({
  source: $notistack,
  effect: (model, { id, message, mode }: Notification) => {
    if (!model) return;

    model.enqueueSnackbar(message, {
      id,
      variant: mode,
      style: { whiteSpace: 'pre-line' }
    });
  }
});

const notification = <T, K = void>(config: {
  clock: Event<T>;
  source?: Store<K>;
  mode: Severity;
  message:
    | string
    | (K extends void ? (clock: T) => string : (clock: T, source: K) => string);

  http?: boolean;
}) => {
  const message = (source: K, clock: T) =>
    typeof config.message === 'function'
      ? config.message(clock, source)
      : config.message;

  const httpMessage = (source: K, clock: T) =>
    !navigator.onLine
      ? 'Your offline. Check internet connection'
      : message(source, clock);

  sample({
    clock: config.clock,

    source: config.source ?? createStore<K>(null as unknown as K),

    filter: $notistack.map(Boolean),

    fn: (source, clock): Notification => {
      const messageFn = config.http ? httpMessage : message;

      return {
        id: nanoid(),
        mode: config.mode,
        message: messageFn(source, clock)
      };
    },

    target: displayNotificationFx
  });
};

export { NotificationGate, notification };
