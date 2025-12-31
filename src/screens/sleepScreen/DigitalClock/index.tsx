import { createSignal } from "@/utils/reactivity";
import Digit from "../Digit";
import "./digitalClock.css";

const DigitalClock = () => {
  const [time, setTime] = createSignal<Date>(new Date());

  // Update time every minute
  setInterval(() => {
    setTime(new Date());
  }, 1000);

  // Calculate display hours for 12-hour format
  const displayHours = () => {
    const hours = time().getHours();
    return hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  };

  // Determine if it's PM
  const isPM = () => time().getHours() >= 12;

  return (
    <div className="digitalClock">
      <div className="digits">
        <Digit value={() => Math.floor(displayHours() / 10)} />
        <Digit value={() => Math.floor(displayHours() % 10)} />
        <div className="colon">
          <div />
          <div />
        </div>
        <Digit value={() => Math.floor(time().getMinutes() / 10)} />
        <Digit value={() => Math.floor(time().getMinutes() % 10)} />
        <div className="periods">
          <div className="period">
            <div className={() => `dot ${!isPM() ? "active" : ""}`} />
            <span>AM</span>
          </div>
          <div className="period">
            <div className={() => `dot ${isPM() ? "active" : ""}`} />
            <span>PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
