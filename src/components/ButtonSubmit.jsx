import React from "react";

const ButtonSubmit = ({ name }) => {
  return (
    <button type="submit" name={name} className="orangeBtn">
      {name}
    </button>
  );
};

export default ButtonSubmit;
