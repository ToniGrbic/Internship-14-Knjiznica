import React, { useState } from "react";

const DateInput = () => {
  const [date, setDate] = useState("");
  return (
    <div>
      <p>Date: </p>
      <input
        className="dateInput"
        type="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

export default DateInput;
