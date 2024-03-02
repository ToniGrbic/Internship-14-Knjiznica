import React, { useState } from "react";

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [seachCategory, setSearchCategory] = useState("");
  return (
    <div>
      <input type="text" placeholder="search by name and author" />
    </div>
  );
};

export default Filter;
