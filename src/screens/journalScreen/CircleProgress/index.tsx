import "./circleProgress.css";

interface CircleProgressProps {
  isActive?: boolean;
  progress?: number; // 0 to 100,
  size?: number;
  children?: HTMLElement;
}

const RADIUS = 42;

const CircleProgress = ({
  isActive = true,
  children,
  progress = 0,
  size = 50,
}: CircleProgressProps) => {
  const circumference = 2 * Math.PI * RADIUS;
  const dashoffset = circumference * ((100 - progress) / 100);

  return (
    <div className="day" style={{ width: size }}>
      <div
        className="progressRidge"
        style={{ width: Math.floor(size * 0.88) }}
      />
      <div className="innerCircle" style={{ width: Math.floor(size * 0.6) }} />
      <svg
        className="progress"
        width={Math.floor(size * 0.88)}
        height={Math.floor(size * 0.88)}
        viewBox="0 0 100 100"
      >
        <circle
          r={RADIUS}
          cx="50"
          cy="50"
          stroke={isActive ? "#f88079" : "#ebc0c8"}
          stroke-dasharray={circumference}
          stroke-dashoffset={dashoffset}
        />
      </svg>
      <div className="text" style={{ width: Math.floor(size * 0.52) }}>
        {children}
      </div>
    </div>
  );
};

export { CircleProgress };
