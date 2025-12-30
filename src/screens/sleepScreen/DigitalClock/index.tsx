import Digit from "../Digit";
import "./digitalClock.css";

const DigitalClock = () => (
  <div className="digitalClock">
    <div className="digits">
      <Digit value={1} />
      <Digit value={0} />
      <div className="colon">
        <div />
        <div />
      </div>
      <Digit value={0} />
      <Digit value={3} />
      <div className="periods">
        <div className="period">
          <div className="dot"></div>
          <span>AM</span>
        </div>
        <div className="period">
          <div className="dot active"></div>
          <span>PM</span>
        </div>
      </div>
    </div>
  </div>
);

export default DigitalClock;
