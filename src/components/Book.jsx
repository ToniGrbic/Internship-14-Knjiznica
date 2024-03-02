import React from "react";
import bookImg from "../assets/book_image.jpg";

const Book = () => {
  return (
    <div className="bookCard">
      <div className="bookImg flexContainerCenter">
        <img src={bookImg} />
      </div>
      <div className="bookContent">
        <div className={`flexContainerCenter`}>
          <h4 className="app__bold-text">Zločin i kanza</h4>
          <p>- Dostojevski</p>
        </div>

        <p>Publisher: Pearson - 2024</p>
        <p>Number of copies: 10</p>
        <div className="flexContainerCenter bookTag">
          <p>Drama</p>
        </div>
      </div>
    </div>
  );
};
export default Book;
