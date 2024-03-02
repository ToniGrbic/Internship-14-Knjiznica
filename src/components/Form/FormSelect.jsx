import React from "react";

const FormSelect = ({ name, options, field, setFormData }) => {
  return (
    <div>
      <p>{name}: </p>
      <select
        id={name}
        name={name}
        value={field}
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
