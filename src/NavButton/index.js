import CE from "../utils/createElement";
import "./navButton.css";

export default function Button({ isActive = false, icon, text }) {
  return CE(
    "button",
    { class: ["navButton", isActive && "active"] },
    CE("div", {}, icon, CE("span", {}, text))
  );
}
