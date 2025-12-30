declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare const createElement: (
  tag: string | [string | null, string],
  props?: Props,
  ...children: Child[]
) => Element;

declare const Fragment: any;
