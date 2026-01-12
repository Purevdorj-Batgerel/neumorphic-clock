import "./statisticsScreen.css";

const StatisticsScreen = () => (
  <div className="statisticsScreen">
    <div className="title">
      <h1>Statistics</h1>
    </div>
    <div className="separator" />
    <div className="tabSelector">
      <div className="inner">
        <div className="tab active">Days</div>
        <div className="tab">Weeks</div>
        <div className="tab">Months</div>
      </div>
    </div>

    <h3>Sleep quality</h3>
    <div className="sleepQualityChart">
      <div className="percentages">
        <span>100%</span>
        <span>80%</span>
        <span>60%</span>
        <span>40%</span>
        <span>20%</span>
      </div>
      <div className="bars">
        <div className="bar">
          <div>
            <div className="fill" style={{ height: "80%" }} />
          </div>
        </div>
        <div className="bar">
          <div>
            <div className="fill" style={{ height: "50%" }} />
          </div>
        </div>
        <div className="bar">
          <div>
            <div className="fill" style={{ height: "90%" }} />
          </div>
        </div>
        <div className="bar">
          <div>
            <div className="fill" style={{ height: "40%" }} />
          </div>
        </div>
        <div className="bar">
          <div>
            <div className="fill" style={{ height: "90%" }} />
          </div>
        </div>
        <div className="bar">
          <div>
            <div className="fill" style={{ height: "20%" }} />
          </div>
        </div>
        <div className="bar">
          <div>
            <div className="fill" style={{ height: "70%" }} />
          </div>
        </div>
      </div>
      <div className="labels">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  </div>
);

export default StatisticsScreen;
