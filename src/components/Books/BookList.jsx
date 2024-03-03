import React from "react";
import Book from "./Book";

const BookList = ({ books, setBooks }) => {
  return (
    <>
      {books.map((book) => {
        return <Book key={book.uuid} book={book} setBooks={setBooks} />;
      })}
    </>
  );
};

export default BookList;
