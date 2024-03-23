import "./global.css";

import App from "./app";

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

window.onChange = onChange;

app.appendChild(App());
