import React from "react";
import SelectOptions from "../Shared/SelectOptions";

const SelectCategory = ({ name, options, field, setFormData }) => {
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
export default SelectCategory;
