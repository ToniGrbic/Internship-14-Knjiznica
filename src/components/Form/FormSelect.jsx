import React from "react";

const FormSelect = ({ options, type, setFormData }) => {
  return (
    <div>
      <p>{type}: </p>
      <select
        id={type}
        name={type}
        onChange={(e) =>
          setFormData({
            category: e.target.value,
          })
        }
      >
        {options?.map((option) => {
          return (
            <>
              <option key={option} value={option}>
                {option}
              </option>
            </>
          );
        })}
      </select>
    </div>
  );
};
export default FormSelect;
