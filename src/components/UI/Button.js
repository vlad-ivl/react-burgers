import React from "react";
import "./Button.css";

function Button({
  classN = "btn-icon",
  onClick,
  children,
  title,
  disabled = false,
}) {
  return (
    <button
      className={classN}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
