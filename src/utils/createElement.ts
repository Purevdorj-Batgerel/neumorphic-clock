import { createEffect } from "./reactivity";


type Props = Record<string, any> | null;
type Child =
  | Node
  | string
  | number
  | ((() => string | number | Node))
  | (Node | string | number | (() => string | number | Node))[];

export default function CE(
  tag: string | [string | null, string],
  props?: Props,
  ...children: Child[]
) {
  let element: Element;
  if (Array.isArray(tag)) {
    element = document.createElementNS(...tag);
  } else {
    element = document.createElement(tag);
  }

  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      if (key.startsWith("on") && typeof value === "function") {
        element.addEventListener(key.substring(2), value as EventListener);
      } else {
        createEffect(() => {
          const actualValue = typeof value === "function" ? value() : value;
          if (key === "class") {
            const cls = Array.isArray(actualValue)
              ? (actualValue as string[]).filter((v) => v).join(" ")
              : String(actualValue);
            element.className = cls;
          } else {
            if (actualValue === null || actualValue === undefined || actualValue === false) {
                 element.removeAttribute(key);
            } else {
                 element.setAttribute(key, String(actualValue));
            }
          }
        });
      }
    });
  }

  children.forEach((child) => {
    if (Array.isArray(child)) {
      element.append(...(child as (Node | string)[]));
      return;
    }

    if (typeof child === "function") {
      const textNode = document.createTextNode("");
      element.appendChild(textNode);
      createEffect(() => {
        const val = child();
        textNode.textContent = String(val);
      });
      return;
    }

    if (typeof child === "string" || typeof child === "number") {
      element.appendChild(document.createTextNode(String(child)));
      return;
    }

    if (child instanceof Node) {
      element.appendChild(child);
    }
  });

  return element;
}
