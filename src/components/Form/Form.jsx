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
    <form id="Form" onSubmit={handleSubmit}>
      <DateInput />
      <FormSelect options={categories} type="Category" />
      <TextInput />
    </form>
  );
};
export default Form;
