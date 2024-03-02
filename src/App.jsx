import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import BookList from "./components/BookList";
import Filter from "./components/Filter";
import "./styles/App.css";
import { Toaster } from "react-hot-toast";

export const defaultBookState = {
  uuid: "",
  title: "",
  author: "",
  imageUrl: "",
  publisher: "",
  publishedDate: "",
  category: "novel",
  numberOfCopies: 0,
};

function App() {
  const [book, setBook] = useState(defaultBookState);
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem("books")));
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
    console.log(filteredBooks);
  }, [books]);

  return (
    <div className="container">
      <Toaster />
      <h1>Library</h1>
      <Form book={book} setBook={setBook} setBooks={setBooks} />
      <Filter
        books={books}
        filteredBooks={filteredBooks}
        setFilteredBooks={setFilteredBooks}
      />
      <h3>Results: {filteredBooks.length}</h3>
      <div className="booksContainer">
        <BookList books={filteredBooks} setBooks={setFilteredBooks} />
      </div>
    </div>
  );
}

export default App;
