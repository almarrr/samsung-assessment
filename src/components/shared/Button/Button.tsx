import React from "react";

interface IProps {
  label: string;
  onClick: () => void;
  variant?: "outlined" | "solid" | "text" | "solid-white";
}

const Button: React.FC<IProps> = ({ variant = "solid", onClick, label }) => {
  return (
    <button onClick={onClick} className={`btn btn-${variant}`}>
      <span>{label}</span>
    </button>
  );
};

export default Button;
