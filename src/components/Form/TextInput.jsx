import React, { useState } from "react";

const TextInput = () => {
  const [inputText, setInputText] = useState("");
  return (
    <div className="submitDiv">
      <input
        type="text"
        id="text-input"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit" id="submit">
        <h3>Submit</h3>
      </button>
    </div>
  );
};

export default TextInput;
