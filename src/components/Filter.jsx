import React, { useEffect, useState } from "react";
import SelectOptions from "./SelectOptions";
import Button from "./Button";
import { categories } from "./Form/Form";

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("All");

  useEffect(() => {
    console.log(searchTerm, searchCategory);
  }, [searchTerm, searchCategory]);
  return (
    <div className="filtersContainer">
      <div className="filterInputs">
        <input
          id="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="search by name and author"
        />
        <select
          id="searchCategory"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        >
          <SelectOptions options={["All", ...categories]} />
        </select>
      </div>
      <Button name="Search" />
    </div>
  );
};

export default Filter;
