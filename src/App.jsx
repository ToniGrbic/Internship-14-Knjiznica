import { useState } from "react";
import Form from "./components/Form/Form";
import BookList from "./components/BookList";
import "./styles/App.css";

const initialBookState = {
  uuid: "",
  title: "",
  author: "",
  imageUrl: "",
  publisher: "",
  publishedDate: "",
  category: "",
  numberOfCopies: 0,
};

function App() {
  const [book, setBook] = useState(initialBookState);
  const [books, setBooks] = useState([]);

  return (
    <div className="container">
      <h1>Library</h1>
      <Form book={book} setBook={setBook} />
      <div className="booksContainer">
        <BookList />
      </div>
    </div>
  );
}

export default App;
