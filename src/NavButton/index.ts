import CE from "../utils/createElement";
import "./navButton.css";


interface ButtonProps {
  isActive?: boolean | (() => boolean);
  icon: Node | string;
  text: string;
  onClick?: () => void;
}

const Button = ({ isActive = false, icon, text, onClick }: ButtonProps) =>
  CE(
    "button",
    {
      class: () => [
        "navButton",
        (typeof isActive === "function" ? isActive() : isActive) && "active",
      ],
      onclick: onClick,
    },
    CE("div", {}, icon, CE("span", {}, text))
  );

export default Button;
