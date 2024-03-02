import React from "react";

const TextInput = ({ name, value, field, setFormData }) => {
  return (
    <div className="textInputDiv">
      <p className="textInputName">{name}</p>
      <input
        name="textInput"
        type="text"
        value={value}
        onChange={(e) => setFormData({ [field]: e.target.value })}
      />
    </div>
  );
};

export default TextInput;
