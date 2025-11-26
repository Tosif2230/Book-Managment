import Book from "./Book";

function Booklist(props) {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", flexWrap:"wrap"}}>
    {props.booksData.map((data) => (
        <Book bookDetails={data}></Book>
      ))}
    </div>
  )
}

export default Booklist;