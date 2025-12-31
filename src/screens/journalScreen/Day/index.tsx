import "./day.css";

interface DayProps {
  day: number;
  label: string;
}

const Day = ({ day = 0, label = "S" }: DayProps) => {
  const isActive = day === new Date().getDay();

  return (
    <div className="day">
      <div className="progressRidge" />
      <div className="innerCircle" />
      <svg className="progress" width="44" height="44" viewBox="0 0 100 100">
        <circle
          r="42"
          cx="50"
          cy="50"
          stroke={isActive ? "#f88079" : "#ebc0c8"}
          stroke-width="13"
          stroke-linecap="round"
          stroke-dashoffset="75px"
          fill="transparent"
          stroke-dasharray="251.20000000000002px"
        />
      </svg>
      <div className="text">{label}</div>
    </div>
  );
};

export { Day };
