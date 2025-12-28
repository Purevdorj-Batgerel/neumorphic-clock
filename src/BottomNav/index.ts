import "./bottomNav.css";
import Button from "../NavButton";
import Moon from "../icons/moon";
import Pulse from "../icons/pulse";
import BarChart from "../icons/barchart";
import Profile from "../icons/profile";
import CE from "../utils/createElement";


const buttons = [
  { icon: Moon(), text: "Sleep", path: "/" },
  { icon: Pulse(), text: "Journal", path: "/journal" },
  { icon: BarChart(), text: "Statistics", path: "/statistics" },
  { icon: Profile(), text: "Profile", path: "/profile" },
];

const BottomNav = ({
  onNavigate,
  currentPath,
}: {
  onNavigate: (path: string) => void;
  currentPath: () => string;
}) =>
  CE(
    "div",
    { class: "bottomNav" },
    buttons.map((button) =>
      Button({
        ...button,
        isActive: () => currentPath() === button.path,
        onClick: () => onNavigate(button.path),
      })
    )
  );

export default BottomNav;
