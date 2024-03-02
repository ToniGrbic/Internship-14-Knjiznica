import React from "react";
import bookImg from "../assets/book_image.jpg";

const Book = ({ book }) => {
  const [yearOfPublishing, _] = book.publishedDate.split("-");
  return (
    <div className="bookCard">
      <div className="bookImg flexContainerCenter">
        <img src={bookImg} />
      </div>
      <div className="bookContent">
        <div className={`flexContainerCenter`}>
          <h4 className="app__bold-text">{book.title}</h4>
          <p>- {book.author}</p>
        </div>
        <p>
          Publisher: {book.publisher} - {yearOfPublishing}
        </p>
        <p>Number of copies: {book.numberOfCopies}</p>
        <div className="flexContainerCenter bookTag">
          <p>{book.category}</p>
        </div>
      </div>
    </div>
  );
};
export default Book;
