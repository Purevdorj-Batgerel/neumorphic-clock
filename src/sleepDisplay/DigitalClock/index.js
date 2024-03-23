import CE from "../../utils/createElement";
import Digit from "../Digit";
import "./digitalClock.css";

export default function DigitalClock() {
  return CE(
    "div",
    { class: "digitalClock" },
    CE(
      "div",
      {},
      CE(
        "div",
        { class: "digits" },
        Digit(1),
        Digit(0),
        CE("div", { class: "colon" }, CE("div"), CE("div")),
        Digit(0),
        Digit(3),
        CE(
          "div",
          { class: "periods" },
          CE(
            "div",
            { class: "period" },
            CE("div", { class: "dot" }),
            CE("span", {}, "AM")
          ),
          CE(
            "div",
            { class: "period" },
            CE("div", { class: ["dot", "active"] }),
            CE("span", {}, "PM")
          )
        )
      )
    )
  );
}
