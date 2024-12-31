import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  onClick,
}) => {
  const buttonClasses = `
    inline-flex items-center justify-center 
    rounded-md 
    px-4 py-2 
    text-sm 
    font-medium
    shadow-sm
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2 
    ${variant === "primary" && `bg-blue-500 hover:bg-blue-700 text-white`}
    ${variant === "secondary" && `bg-gray-300 hover:bg-gray-400 text-gray-700`}
    ${
      variant === "tertiary" &&
      `border border-gray-300 hover:bg-gray-100 text-gray-700`
    }
    ${size === "sm" && `text-xs px-2 py-1`}
    ${size === "lg" && `text-base px-6 py-3`}
  `;

  return (
    <button type="button" className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
