import React, { useState } from "react";

const DateInput = () => {
  const [date, setDate] = useState("");
  return (
    <div className="dateDiv">
      <label htmlFor="date">Date: </label>
      <input
        id="date"
        type="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

export default DateInput;
