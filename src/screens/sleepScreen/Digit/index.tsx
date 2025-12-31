import { createEffect } from "@/utils/reactivity";
import "./digit.css";

const Digit = ({ value }: { value: () => number }) => {
  const getClassName = (base: string[], condition: boolean) =>
    [...base, condition && "on"].filter(Boolean).join(" ");

  // Create the element
  const digit = document.createElement("div");
  digit.className = "digit";

  // Create spans
  const spans = [
    document.createElement("span"),
    document.createElement("span"),
    document.createElement("span"),
    document.createElement("span"),
    document.createElement("span"),
    document.createElement("span"),
    document.createElement("span"),
  ];

  spans.forEach((span, index) => {
    digit.appendChild(span);
    const base = index === 0 || index === 3 || index === 6 ? ["hor"] : ["ver"];
    base.push(`d${index + 1}`);
    createEffect(() => {
      const val = value();
      let condition = false;
      switch (index) {
        case 0: // d1
          condition = [2, 3, 5, 6, 7, 8, 9, 0].includes(val);
          break;
        case 1: // d2
          condition = [4, 5, 6, 8, 9, 0].includes(val);
          break;
        case 2: // d3
          condition = [1, 2, 3, 4, 7, 8, 9, 0].includes(val);
          break;
        case 3: // d4
          condition = [2, 3, 4, 5, 6, 8, 9].includes(val);
          break;
        case 4: // d5
          condition = [2, 6, 8, 0].includes(val);
          break;
        case 5: // d6
          condition = [1, 3, 4, 5, 6, 7, 8, 9, 0].includes(val);
          break;
        case 6: // d7
          condition = [2, 3, 5, 6, 8, 9, 0].includes(val);
          break;
      }
      span.className = getClassName(base, condition);
    });
  });

  return digit;
};

export default Digit;
