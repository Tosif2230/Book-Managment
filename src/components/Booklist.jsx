import { useState } from "react";
import { Books } from "../utils/mockData";
import Book from "./Book";
import Search from "./Search";
import { Link } from "react-router-dom";

function Booklist() {
  const [filteredBooks, setfilteredBooks] = useState(Books);

  function fileterSearchList(filteredSearchBooks) {
    setfilteredBooks(filteredSearchBooks);
  }

  return (
    <>
      <Search filterFunction={fileterSearchList} />
      
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}>
          {filteredBooks.map((book) => (
            <Link to={`/book/${book.id}`}>
            <Book key={book.id} bookDetails={book} /> 
            </Link>
          ))}
        </div>
    </>
  );
}

export default Booklist;
