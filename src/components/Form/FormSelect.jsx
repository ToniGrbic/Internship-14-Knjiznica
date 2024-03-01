import React from "react";

const FormSelect = ({ options, type }) => {
  return (
    <div className="selectDiv">
      <label htmlFor={type}>{type}: </label>
      <select
        id={type}
        name={type}
        onChange={(e) => console.log(e.target.value)}
      >
        {options?.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormSelect;
