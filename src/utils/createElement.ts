import { createEffect } from "./reactivity";

const SVG_TAGS = ["svg", "path", "circle", "rect", "line"];

function isEventListenerOrEventListenerObject(
  value: any
): value is EventListenerOrEventListenerObject {
  return (
    typeof value === "function" ||
    (typeof value === "object" &&
      value !== null &&
      Object.prototype.hasOwnProperty.call(value, "handleEvent"))
  );
}

function createElement(
  tag: string | ((props: any) => Element),
  props: any,
  ...children: any[]
) {
  if (typeof tag === "function") {
    return tag({ ...props, children });
  }
  let element;

  if (SVG_TAGS.includes(tag)) {
    element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  } else {
    element = document.createElement(tag);
  }

  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      if (key.startsWith("on") && isEventListenerOrEventListenerObject(value)) {
        element.addEventListener(key.substring(2).toLowerCase(), value);
      } else if (key === "className") {
        // Handle reactive className
        if (typeof value === "function") {
          createEffect(() => {
            element.setAttribute("class", String(value()));
          });
        } else {
          element.setAttribute("class", String(value));
        }
      } else if (
        key === "style" &&
        typeof value === "object" &&
        value !== null
      ) {
        Object.entries(value).forEach(([styleKey, styleValue]) => {
          if (typeof styleValue === "function") {
            createEffect(() => {
              element.style.setProperty(styleKey, String(styleValue()));
            });
          } else {
            if (typeof styleValue === "number") {
              element.style.setProperty(styleKey, `${styleValue}px`);
            } else {
              element.style.setProperty(styleKey, styleValue);
            }
          }
        });
      } else {
        // Handle reactive attributes
        if (typeof value === "function") {
          createEffect(() => {
            element.setAttribute(key, String(value()));
          });
        } else {
          element.setAttribute(key, String(value));
        }
      }
    });
  }

  children.flat().forEach((child) => {
    if (typeof child === "string" || typeof child === "number") {
      element.appendChild(document.createTextNode(String(child)));
    } else if (typeof child === "function") {
      // Handle reactive children (signals)
      const textNode = document.createTextNode("");
      element.appendChild(textNode);
      createEffect(() => {
        textNode.textContent = String(child());
      });
    } else {
      element.appendChild(child);
    }
  });

  return element;
}

function Fragment(props: any) {
  return props.children;
}

export { createElement, Fragment };
