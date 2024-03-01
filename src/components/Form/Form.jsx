import React from "react";
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

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div className="selectInputsContainer">
        <DateInput />
        <FormSelect options={categories} type="Category" />
      </div>

      <TextInput name="Title" />
      <TextInput name="Author" />
      <TextInput name="Publisher" />
      <TextInput name="Book Image URL (optional)" />

      <button type="submit" id="addBookBtn">
        Add Book
      </button>
    </form>
  );
};
export default Form;
