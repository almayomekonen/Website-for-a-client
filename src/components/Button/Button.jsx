import React from "react";

const Button = ({ children, isActive, ...props }) => {
  return (
    <button className={isActive ? "active" : undefined} {...props}>
      {children}
    </button>
  );
};
export default Button;
