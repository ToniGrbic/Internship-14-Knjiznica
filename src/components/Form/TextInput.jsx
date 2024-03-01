import React, { useState } from "react";

const TextInput = ({ name }) => {
  const [inputText, setInputText] = useState("");
  return (
    <div className="textInputDiv">
      <p className="textInputName">{name}</p>
      <input
        type="text"
        id="text-input"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
