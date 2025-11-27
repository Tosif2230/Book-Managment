import { useState } from "react";
import "./App.css";
import Booklist from "./components/Booklist";
import { Books } from "./utils/mockData";
import Book from "./components/Book";

function App() {
  const [searchText, setsearchText] = useState("");
  const [filteredBook,setfilterBook] = useState(Books)
  function handleSearch() {
    const filterBook = Books.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()));
    setfilterBook(filterBook);
  }
  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        Interesting Books
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setsearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <Booklist booksData={filteredBook} />
    </>
  );
}

export default App;
