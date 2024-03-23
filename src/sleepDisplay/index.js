import CE from "../utils/createElement";
import CircleButton from "./CircleButton";
import DigitalClock from "./DigitalClock";
import "./sleepDisplay.css";

export default function SleepDisplay() {
  return CE(
    "div",
    { class: "sleepDisplay" },
    DigitalClock(),
    CE(
      "div",
      { class: "circleButtons" },
      CircleButton({ text: "HR" }),
      CircleButton({ text: "MIN" })
    ),
    CE("button", { class: "setAlarmButton" }, "Set alarm"),
    CE(
      "div",
      { class: "notice" },
      CE("p", {}, "Smart alarm will wake you up between"),
      CE("p", { class: "time" }, "9:30 AM  - 10:00 AM")
    )
  );
}
