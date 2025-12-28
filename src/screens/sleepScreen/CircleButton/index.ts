import CE from "../../../utils/createElement";
import "./circleButton.css";

const CircleButton = ({ text = "" }) =>
  CE(
    "div",
    { class: "circleButton" },
    CE("div", { class: "innerCircle" }, text)
  );

export default CircleButton;
