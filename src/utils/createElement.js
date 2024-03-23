export default function CE(tag, props, ...children) {
  let element;
  if (Array.isArray(tag)) {
    element = document.createElementNS(...tag);
  } else {
    element = document.createElement(tag);
  }

  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      if (key.startsWith("on") && typeof value === "function") {
        element.addEventListener(key.substring(2), value);
      } else {
        if (key === "class") {
          if (Array.isArray(value)) {
            element.classList.add(...value);
          } else {
            element.classList.add(value);
          }
        } else {
          element.setAttribute(key, value);
        }
      }
    });
  }

  children.forEach((child) => {
    if (Array.isArray(child)) {
      return element.append(...child);
    }

    if (typeof child === "string" || typeof child === "number") {
      child = document.createTextNode(child);
    }

    if (child instanceof Node) {
      element.appendChild(child);
    }
  });

  return element;
}
