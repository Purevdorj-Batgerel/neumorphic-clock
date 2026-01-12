import { getDayName, getISOWeekStartEnd } from "@/utils/date-fns";
import { CircleProgress } from "./CircleProgress";
import "./journalScreen.css";
import { AlarmClock, Moon, Bed, Star } from "@/icons";

const days = [
  { day: 0, label: "S", progress: 80 },
  { day: 1, label: "M", progress: 60 },
  { day: 2, label: "T", progress: 100 },
  { day: 3, label: "W", progress: 40 },
  { day: 4, label: "T", progress: 90 },
  { day: 5, label: "F", progress: 20 },
  { day: 6, label: "S", progress: 70 },
];

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
};

const JournalScreen = () => {
  const dayName = getDayName();
  const { firstDay, lastDay } = getISOWeekStartEnd();

  return (
    <div className="journalScreen">
      <div className="title">
        <h1>{dayName}</h1>
        <p>{`${formatDate(firstDay)} - ${formatDate(lastDay)}`}</p>
      </div>
      <div className="separator" />
      <div className="days">
        {days.map(({ day, label, progress }) => (
          <CircleProgress
            isActive={day === new Date().getDay()}
            progress={progress}
          >
            <p className="dayLabel">{label}</p>
          </CircleProgress>
        ))}
      </div>
      <div className="separator" />
      <div className="qualitySection">
        <CircleProgress progress={60} size={150}>
          <div className="sleepQuality">
            <p className="sleepPercent">63%</p>
            <p>Quality</p>
          </div>
        </CircleProgress>
        <div className="timeSection">
          <div className="time">
            <div className="duration">5h 31m</div>
            <div className="label">In bed</div>
          </div>
          <div className="time">
            <div className="duration">4h 26m</div>
            <div className="label">Asleep</div>
          </div>
        </div>
      </div>
      <div className="separator" />
      <div className="statsSection">
        <div className="stat">
          <div className="icon">
            <Moon />
          </div>
          <div className="time">
            <div className="duration">11:13 PM</div>
            <div className="label">Went to bed</div>
          </div>
        </div>
        <div className="stat">
          <div className="icon">
            <Bed />
          </div>
          <div className="time">
            <div className="duration">19 min</div>
            <div className="label">Went to bed</div>
          </div>
        </div>
        <div className="stat">
          <div className="icon">
            <AlarmClock />
          </div>
          <div className="time">
            <div className="duration">5h 31m</div>
            <div className="label">Went to bed</div>
          </div>
        </div>
        <div className="stat">
          <div className="icon">
            <Star />
          </div>
          <div className="time">
            <div className="duration">5h 31m</div>
            <div className="label">Went to bed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalScreen;
