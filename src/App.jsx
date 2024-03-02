import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import BookList from "./components/BookList";
import "./styles/App.css";
import { Toaster } from "react-hot-toast";

const initialBookState = {
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
  const [book, setBook] = useState(initialBookState);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    console.log(books);
  }, [books]);
  return (
    <div className="container">
      <Toaster />
      <h1>Library</h1>
      <Form book={book} setBook={setBook} setBooks={setBooks} />
      <div className="booksContainer">
        <BookList />
      </div>
    </div>
  );
}

export default App;
