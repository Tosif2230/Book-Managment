import { useEffect, useState } from "react";
import Book from "./Book";
import Search from "./Search";
import { Link } from "react-router-dom";

function Booklist() {
  const [filteredBooks, setFilteredBooks] = useState([]);

  function filterSearchList(filteredSearchBooks) {
    setFilteredBooks(filteredSearchBooks);
  }

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch("https://raw.githubusercontent.com/tosif2230/Dummy-Books-API/main/books.json");
      const data = await resp.json();
      setFilteredBooks(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Search filterFunction={filterSearchList} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {Array.isArray(filteredBooks) &&
  filteredBooks.map(book => (
    <Link key={book.id} to={`/book/${book.id}`}>
      <Book bookDetails={book} />
    </Link>
))}

      </div>
    </>
  );
}

export default Booklist;
