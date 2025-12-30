import CircleButton from "./CircleButton";
import DigitalClock from "./DigitalClock";
import "./sleepScreen.css";

const SleepScreen = () => (
  <div className="sleepScreen">
    <DigitalClock />
    <div className="circleButtons">
      <CircleButton text="HR" />
      <CircleButton text="MIN" />
    </div>
    <button className="setAlarmButton">Set alarm</button>
    <div className="notice">
      <p>Smart alarm will wake you up between</p>
      <p className="time">9:30 AM - 10:00 AM</p>
    </div>
  </div>
);

export default SleepScreen;
