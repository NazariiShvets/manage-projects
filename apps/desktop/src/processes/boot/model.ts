import { createEvent, createStore } from 'effector';

import { atom } from '@/shared/lib/misc';

const $$boot = atom(() => {
  const boot = createEvent();

  const $ready = createStore(false);

  $ready.on(boot, () => true);

  return {
    $ready,

    boot
  };
});

export { $$boot };
