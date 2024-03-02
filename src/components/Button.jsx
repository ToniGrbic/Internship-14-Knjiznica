import React from "react";

const Button = ({ name }) => {
  return (
    <button name="submit" className="orangeBtn">
      {name}
    </button>
  );
};

export default Button;
