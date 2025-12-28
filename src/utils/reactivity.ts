// Reactivity system based on the observer pattern

let activeEffect: (() => void) | null = null;

export function createSignal<T>(initialValue: T): [() => T, (newValue: T) => void] {
  let value = initialValue;
  const subscribers = new Set<() => void>();

  const read = () => {
    if (activeEffect) {
      subscribers.add(activeEffect);
    }
    return value;
  };

  const write = (newValue: T) => {
    value = newValue;
    subscribers.forEach((fn) => fn());
  };

  return [read, write];
}

export function createEffect(callback: () => void) {
  activeEffect = callback;
  callback();
  activeEffect = null;
}
