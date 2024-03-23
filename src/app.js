import "./app.css";
import BottomNav from "./BottomNav";
import SleepDisplay from "./sleepDisplay";
import CE from "./utils/createElement";

export default function App() {
  return CE(
    "main",
    {},
    CE(
      "div",
      { class: "phone" },
      CE("div", { class: "display" }, SleepDisplay()),
      BottomNav()
    )
  );
}
