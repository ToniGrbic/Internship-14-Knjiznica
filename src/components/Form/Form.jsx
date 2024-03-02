import React, { useState } from "react";
import FormSelect from "./FormSelect";
import TextInput from "./TextInput";
import DateInput from "./DateInput";

const categories = [
  "novel",
  "poetry",
  "drama",
  "fantasy",
  "science fiction",
  "biography",
];

const Form = ({ book, setBook }) => {
  const { title, author, imageUrl, publisher, publishedDate, numberOfCopies } =
    book;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);
  };

  const setFormData = (fields) => {
    setBook((prev) => {
      return { ...prev, ...fields };
    });
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div className="selectInputsContainer">
        <DateInput date={publishedDate} setFormData={setFormData} />
        <FormSelect
          options={categories}
          type="Category"
          setFormData={setFormData}
        />
        <div>
          <p>Number of copies:</p>
          <input
            type="number"
            onChange={(e) => setFormData({ numberOfCopies: e.target.value })}
          />
        </div>
      </div>

      <TextInput
        name="Title"
        field="title"
        value={title}
        setFormData={setFormData}
      />
      <TextInput
        name="Author"
        field="author"
        value={author}
        setFormData={setFormData}
      />
      <TextInput
        name="Publisher"
        field="publisher"
        value={publisher}
        setFormData={setFormData}
      />
      <TextInput
        name="Book Image URL (optional)"
        field="imageUrl"
        value={imageUrl}
        setFormData={setFormData}
      />

      <button type="submit" id="addBookBtn">
        Add Book
      </button>
    </form>
  );
};
export default Form;
