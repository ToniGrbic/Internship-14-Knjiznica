import React, { useState } from "react";
import SelectOptions from "./SelectOptions";
import ButtonSubmit from "./ButtonSubmit";
import { categories } from "./Form/Form";

const Filter = ({ books, setFilteredBooks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("All");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filtered = books.filter((book) => {
      const title = book.title.toLowerCase().includes(searchTerm.toLowerCase());
      const author = book.author
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const category =
        searchCategory === "All" ? true : book.category === searchCategory;
      if (searchTerm === "") return category;
      return (title || author) && category;
    });
    console.log(filtered);
    setFilteredBooks(filtered);
  };

  const handleSearchTerm = (e) => {
    if (e.target.value === "") {
      setFilteredBooks(books);
    }
    setSearchTerm(e.target.value);
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
