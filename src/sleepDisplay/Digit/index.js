import CE from "../../utils/createElement";
import "./digit.css";

export default function Digit(value = 0) {
  return CE(
    "div",
    { class: "digit" },
    CE("span", {
      class: [
        "hor",
        "d1",
        (value === 2 ||
          value === 3 ||
          value === 5 ||
          value === 6 ||
          value === 7 ||
          value === 8 ||
          value === 9 ||
          value === 0) &&
          "on",
      ],
    }),
    CE("span", {
      class: [
        "ver",
        "d2",
        (value === 4 ||
          value === 5 ||
          value === 6 ||
          value === 8 ||
          value === 9 ||
          value === 0) &&
          "on",
      ],
    }),
    CE("span", {
      class: [
        "ver",
        "d3",
        (value === 1 ||
          value === 2 ||
          value === 3 ||
          value === 4 ||
          value === 7 ||
          value === 8 ||
          value === 9 ||
          value === 0) &&
          "on",
      ],
    }),
    CE("span", {
      class: [
        "hor",
        "d4",
        (value === 2 ||
          value === 3 ||
          value === 4 ||
          value === 5 ||
          value === 6 ||
          value === 8 ||
          value === 9) &&
          "on",
      ],
    }),
    CE("span", {
      class: [
        "ver",
        "d5",
        (value === 2 || value === 6 || value === 8 || value === 0) && "on",
      ],
    }),
    CE("span", {
      class: [
        "ver",
        "d6",
        (value === 1 ||
          value === 3 ||
          value === 4 ||
          value === 5 ||
          value === 6 ||
          value === 7 ||
          value === 8 ||
          value === 9 ||
          value === 0) &&
          "on",
      ],
    }),
    CE("span", {
      class: [
        "hor",
        "d7",
        (value === 2 ||
          value === 3 ||
          value === 5 ||
          value === 6 ||
          value === 8 ||
          value === 9 ||
          value === 0) &&
          "on",
      ],
    })
  );
}
