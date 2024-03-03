import React from "react";
import bookImg from "../../assets/book_image.jpg";
import toast from "react-hot-toast";

const Book = ({ book, setBooks }) => {
  const [yearOfPublishing, _] = book.publishedDate.split("-");

  const findBookAndUpdateCopiesNum = (prev, newValue) => {
    return prev.map((b) => {
      if (b.uuid === book.uuid) {
        return { ...b, numberOfCopies: newValue };
      }
      return b;
    });
  };

  const handleBorrowBook = () => {
    if (book.numberOfCopies === 0) {
      toast.error("No more copies available!");
      return;
    }
    setBooks((prev) => {
      return findBookAndUpdateCopiesNum(prev, +book.numberOfCopies - 1);
    });
  };

  const handleReturnBook = () => {
    setBooks((prev) => {
      return findBookAndUpdateCopiesNum(prev, +book.numberOfCopies + 1);
    });
  };

  return (
    <div
      className={`bookCard ${book.numberOfCopies === 0 ? "lowerOpacity" : ""}`}
    >
      <div className="bookImg flexContainerCenter">
        <img src={book.imageUrl || bookImg} />
      </div>
      <div className="bookContent">
        <div className="">
          <h4 className="app__bold-text">{book.title}</h4>
          <p>Author: {book.author}</p>
        </div>
        <p>
          Publisher: {book.publisher} - {yearOfPublishing}
        </p>
        <div>
          <p>Number of copies: {book.numberOfCopies}</p>
          <div>
            <button className="bookBtn borrowBtn" onClick={handleBorrowBook}>
              - Borrow
            </button>
            <button className="bookBtn returnBtn" onClick={handleReturnBook}>
              + Return
            </button>
          </div>
        </div>

        <div className="flexContainerCenter bookTag">
          <p>{book.category}</p>
        </div>
      </div>
    </div>
  );
};
export default Book;
