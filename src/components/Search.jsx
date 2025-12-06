import { useState } from "react";
import { Books } from "../utils/mockData";



function Search({ filterFunction }) {
  const [searchText, setsearchText] = useState("");

  function handleSearch() {
    const filtered = Books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    filterFunction(filtered);
  }

  return (
    <>
    <div>
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
    </div>
</>
  );
}

export default Search;


