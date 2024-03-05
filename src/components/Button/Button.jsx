import React from "react";

const Button = ({ children, isActive, ...props }) => {
  return <button {...props}>{children}</button>;
};
export default Button;
