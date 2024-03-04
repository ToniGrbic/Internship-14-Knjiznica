import React from "react";
import toast from "react-hot-toast";
import uuid from "react-uuid";

import SelectCategory from "./SelectCategory";
import TextInput from "./TextInput";
import DateInput from "./DateInput";
import ButtonSubmit from "../ButtonSubmit";

import { defaultBookState, categories } from "../../utils/constants";
import { sortBooks } from "../../utils/utils";

const Form = ({ book, setBook, setBooks }) => {
  const {
    title,
    author,
    imageUrl,
    publisher,
    publishedDate,
    category,
    numberOfCopies,
  } = book;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || author === "" || publisher === "") {
      toast.error("some required text inputs are empty, can't submit");
      return;
    } else if (publishedDate === "") {
      toast.error("please select a date, can't submit");
      return;
    }
    book.uuid = uuid();

    setBooks((prev) => {
      return sortBooks([...prev, book]);
    });
    setBook(defaultBookState);
    toast.success("New book added");
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
        <SelectCategory
          name="category"
          options={categories}
          field={category}
          setFormData={setFormData}
        />
        <div>
          <p>copies:</p>
          <input
            type="number"
            value={numberOfCopies}
            onChange={(e) => {
              if (e.target.value >= 0)
                setFormData({ numberOfCopies: e.target.value });
            }}
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

      <ButtonSubmit name="Add Book" />
    </form>
  );
};
export default Form;
