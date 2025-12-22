import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        const resp = await fetch(
          "https://raw.githubusercontent.com/tosif2230/Dummy-Books-API/main/books.json"
        );
        const data = await resp.json();
        const foundBook = data.find(b => b.id === id);
        setBook(foundBook);
      } catch (err) {
        console.error(err);
      }
    }
    fetchBook();
  }, [id]);

  if (!book) return <p>Loading book...</p>;

  return (
    <>
      <h1>Book Details</h1>
      <h2>Title: {book.title}</h2>
      <h2>Description: {book.description}</h2>
      <h2>Author: {book.author}</h2>
      <h2>Category: {book.category}</h2>
      <h2>Rating: {book.rating}</h2>
      <img src={book.imageUrl} alt={book.title} width={200} />
    </>
  );
}

export default BookDetails;
