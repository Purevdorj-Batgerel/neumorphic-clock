import "./circleButton.css";

const CircleButton = ({ text = "" }) => (
  <div className="circleButton">
    <div className="innerCircle">{text}</div>
  </div>
);

export default CircleButton;
