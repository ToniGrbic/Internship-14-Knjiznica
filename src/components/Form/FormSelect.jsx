import React from "react";
import SelectOptions from "../SelectOptions";

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
        <SelectOptions options={options} />
      </select>
    </div>
  );
};
export default FormSelect;
