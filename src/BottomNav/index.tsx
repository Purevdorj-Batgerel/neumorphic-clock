import "./bottomNav.css";
import Button from "../NavButton";
import { Pulse, Moon, BarChart, Profile } from "@/icons";
import { currentPath, navigate } from "@/router/router";

const buttons = [
  { icon: Moon(), text: "Sleep", path: "/" },
  { icon: Pulse(), text: "Journal", path: "/journal" },
  { icon: BarChart(), text: "Statistics", path: "/statistics" },
  { icon: Profile(), text: "Profile", path: "/profile" },
];

const BottomNav = () => (
  <div className="bottomNav">
    {buttons.map((button) => (
      <Button
        {...button}
        isActive={() => currentPath() === button.path}
        onClick={() => navigate(button.path)}
      />
    ))}
  </div>
);

export default BottomNav;
