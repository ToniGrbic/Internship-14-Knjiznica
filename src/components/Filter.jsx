import React, { useState } from "react";

import SelectOptions from "./SelectOptions";
import ButtonSubmit from "./ButtonSubmit";
import { categories } from "../utils/constants";

const Filter = ({ books, setFilteredBooks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("All");

  const filterBooks = (books, searchTerm) => {
    return books.filter((book) => {
      const category =
        searchCategory === "All" ? true : book.category === searchCategory;
      if (!searchTerm) return category;

      const title = book.title.toLowerCase().includes(searchTerm.toLowerCase());
      const author = book.author
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return (title || author) && category;
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filtered = filterBooks(books, e.target.value);
    setFilteredBooks(filtered);
  };

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);

    setTimeout(() => {
      const filtered = filterBooks(books, e.target.value);
      setFilteredBooks(filtered);
    }, 400);
  };

  return (
    <form
      id="Search"
      onSubmit={handleSearchSubmit}
      className="filtersContainer"
    >
      <div className="filterInputs">
        <input
          id="searchInput"
          value={searchTerm}
          onChange={handleSearchTerm}
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
      <ButtonSubmit name="Search" />
    </form>
  );
};

export default Filter;
