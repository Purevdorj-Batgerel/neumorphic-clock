import "./bottomNav.css";
import Button from "../NavButton";
import Moon from "../icons/moon";
import Pulse from "../icons/pulse";
import BarChart from "../icons/barchart";
import Profile from "../icons/profile";
import CE from "../utils/createElement";

export default function BottomNav() {
  const buttons = [
    { isActive: true, icon: Moon(), text: "Sleep" },
    { icon: Pulse(), text: "Journal" },
    { icon: BarChart(), text: "Statistics" },
    { icon: Profile(), text: "Profile" },
  ];

  return CE(
    "div",
    { class: "bottomNav" },
    buttons.map((button) => Button(button))
  );
}
