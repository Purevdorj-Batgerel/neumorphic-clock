import "./global.css";

import App from "./app";

const toggle = document.getElementById("toggle") as HTMLInputElement;
const app = document.getElementById("app") as HTMLDivElement;

function onChange() {
  document.documentElement.classList.add("theme-transition");
  if (toggle.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
  window.setTimeout(() => {
    document.documentElement.classList.remove("theme-transition");
  }, 1000);
}

// @ts-expect-error
window.onChange = onChange;

if (app) {
  app.appendChild(App());
}
