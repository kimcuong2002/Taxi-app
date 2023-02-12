import React from "react";

const Button = ({ name, icon, className}) => {
  return (
    <div className={className} >
      <div>{name}</div>
      <div>{icon}</div>
    </div>
  );
};

export default Button;
