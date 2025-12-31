// This is our work in progress Reactive Library

interface Effect {
  execute: () => void;
  dependencies: Set<Set<Effect>>;
}

const context: Effect[] = [];

function subscribe(running: Effect, subscriptions: Set<Effect>) {
  subscriptions.add(running);
  running.dependencies.add(subscriptions);
}

function createSignal<T>(
  value: T
): [() => T, (nextValue: T | ((prev: T) => T)) => void] {
  const subscriptions = new Set<Effect>();

  const read = () => {
    const running = context[context.length - 1];
    if (running) subscribe(running, subscriptions);
    return value;
  };

  const write = (nextValue: T | ((prev: T) => T)) => {
    value =
      typeof nextValue === "function"
        ? (nextValue as (prev: T) => T)(value)
        : nextValue;

    for (const sub of [...subscriptions]) {
      sub.execute();
    }
  };
  return [read, write];
}

function cleanup(running: Effect) {
  for (const dep of running.dependencies) {
    dep.delete(running);
  }
  running.dependencies.clear();
}

function createEffect(fn: () => void) {
  const effect: Effect = {
    execute() {
      cleanup(effect);
      context.push(effect);
      try {
        fn();
      } finally {
        context.pop();
      }
    },
    dependencies: new Set(),
  };

  effect.execute();
}

export { createSignal, createEffect };
