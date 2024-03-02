import React from "react";

const DateInput = ({ date, setFormData }) => {
  return (
    <div>
      <p>Date: </p>
      <input
        className="dateInput"
        type="date"
        name="date"
        value={date}
        onChange={(e) => setFormData({ publishedDate: e.target.value })}
      />
    </div>
  );
};

export default DateInput;
