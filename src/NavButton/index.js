import CE from "../utils/createElement";
import "./navButton.css";

export default function Button({ isActive = false, icon, text }) {
  return CE(
    "button",
    {
      class: ["navButton", isActive && "active"],
      onclick: (event) => {
        history.pushState("state", "", text);
      },
    },
    CE("div", {}, icon, CE("span", {}, text))
  );
}
