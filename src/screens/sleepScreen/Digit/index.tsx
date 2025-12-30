import "./digit.css";

const Digit = ({ value = 0 }: { value: number }) => {
  const getClassName = (base: string[], condition: boolean) =>
    [...base, condition && "on"].filter(Boolean).join(" ");

  return (
    <div className="digit">
      <span
        className={getClassName(
          ["hor", "d1"],
          value === 2 ||
            value === 3 ||
            value === 5 ||
            value === 6 ||
            value === 7 ||
            value === 8 ||
            value === 9 ||
            value === 0
        )}
      />
      <span
        className={getClassName(
          ["ver", "d2"],
          value === 4 ||
            value === 5 ||
            value === 6 ||
            value === 8 ||
            value === 9 ||
            value === 0
        )}
      />
      <span
        className={getClassName(
          ["ver", "d3"],
          value === 1 ||
            value === 2 ||
            value === 3 ||
            value === 4 ||
            value === 7 ||
            value === 8 ||
            value === 9 ||
            value === 0
        )}
      />
      <span
        className={getClassName(
          ["hor", "d4"],
          value === 2 ||
            value === 3 ||
            value === 4 ||
            value === 5 ||
            value === 6 ||
            value === 8 ||
            value === 9
        )}
      />
      <span
        className={getClassName(
          ["ver", "d5"],
          value === 2 || value === 6 || value === 8 || value === 0
        )}
      />
      <span
        className={getClassName(
          ["ver", "d6"],
          value === 1 ||
            value === 3 ||
            value === 4 ||
            value === 5 ||
            value === 6 ||
            value === 7 ||
            value === 8 ||
            value === 9 ||
            value === 0
        )}
      />
      <span
        className={getClassName(
          ["hor", "d7"],
          value === 2 ||
            value === 3 ||
            value === 5 ||
            value === 6 ||
            value === 8 ||
            value === 9 ||
            value === 0
        )}
      />
    </div>
  );
};

export default Digit;
