import React, { useState } from "react";

const TextInput = ({ name, value, field, setFormData }) => {
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  return (
    <div className="textInputDiv">
      <p className="textInputName">{name}</p>
      <input
        className={isInputEmpty ? "inputEmpty" : ""}
        name="textInput"
        type="text"
        value={value}
        onChange={(e) => {
          if (e.target.value == "") setIsInputEmpty(true);
          else setIsInputEmpty(false);
          setFormData({ [field]: e.target.value });
        }}
      />
    </div>
  );
};

export default TextInput;
