import "./navButton.css";

interface ButtonProps {
  isActive?: boolean | (() => boolean);
  icon: Node | string;
  text: string;
  onClick?: () => void;
}

const Button = ({ isActive = false, icon, text, onClick }: ButtonProps) => {
  // Create reactive className that updates when isActive changes
  const getClassName = () => {
    const active = typeof isActive === "function" ? isActive() : isActive;
    return `navButton ${active ? "active" : ""}`.trim();
  };

  return (
    <button
      className={typeof isActive === "function" ? getClassName : getClassName()}
      onclick={onClick}
    >
      <div>
        {icon}
        <span>{text}</span>
      </div>
    </button>
  );
};
export default Button;
