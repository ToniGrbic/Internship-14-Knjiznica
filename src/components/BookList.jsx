import React from "react";
import Book from "./Book";

const BookList = ({ books }) => {
  return (
    <>
      {books.map((book) => {
        return <Book key={book.uuid} book={book} />;
      })}
    </>
  );
};

export default BookList;
