import "./bottomNav.css";
import Button from "../NavButton";
import Moon from "../icons/moon";
import Pulse from "../icons/pulse";
import BarChart from "../icons/barchart";
import Profile from "../icons/profile";
import CE from "../utils/createElement";

export default function BottomNav() {
  return CE(
    "div",
    { class: "bottomNav" },
    Button({ isActive: true, icon: Moon(), text: "Sleep" }),
    Button({ icon: Pulse(), text: "Journal" }),
    Button({ icon: BarChart(), text: "Statistics" }),
    Button({ icon: Profile(), text: "Profile" })
  );
}
