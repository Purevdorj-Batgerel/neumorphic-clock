import { getDayName, getISOWeekStartEnd } from "@/utils/date-fns";
import { Day } from "./Day";
import "./journalScreen.css";

const days = [
  { day: 0, label: "S" },
  { day: 1, label: "M" },
  { day: 2, label: "T" },
  { day: 3, label: "W" },
  { day: 4, label: "T" },
  { day: 5, label: "F" },
  { day: 6, label: "S" },
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
    <div className="sleepDisplay">
      <div className="title">
        <h1>{dayName}</h1>
        <p>{`${formatDate(firstDay)} - ${formatDate(lastDay)}`}</p>
      </div>
      <div className="separator" />
      <div className="days">
        {days.map(({ day, label }) => (
          <Day day={day} label={label} />
        ))}
      </div>
      <div className="separator" />
      <div></div>
    </div>
  );
};

export default JournalScreen;
