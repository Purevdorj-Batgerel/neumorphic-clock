import CE from "../../utils/createElement";
import "./circleButton.css";

export default function CircleButton({ text = "" }) {
  return CE(
    "div",
    { class: "circleButton" },
    CE("div", { class: "innerCircle" }, text)
  );
}
