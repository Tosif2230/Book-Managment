import { useParams } from "react-router-dom";
import { Books } from "../utils/mockData";

function BookDetails() {
  const params = useParams();
  const book = Books.filter((book) => book.id == params.id);
  return (
    <>
      <h1>{`Book details for book whose id is ${params.id}`}</h1>
      <br />
      {book.map((book) => {
        return (
          <>
            <h2>Book Title: {book.title}</h2>
            <h2>Book Description: {book.description}</h2>
          </>
        );
      })}
    </>
  );
}
export default BookDetails;
