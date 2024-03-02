import React from "react";

const SelectOptions = ({ options }) => {
  return (
    <>
      {options?.map((option) => {
        return (
          <>
            <option key={option} value={option}>
              {option}
            </option>
          </>
        );
      })}
    </>
  );
};

export default SelectOptions;
