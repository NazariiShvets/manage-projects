const atom = <T>(factory: () => T) => factory();

const bridge = (factory: () => void) => {
  factory();
};

export { atom, bridge };
