import Book from "./Book";

function Booklist(props) {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", flexWrap:"wrap"}}>
    {props.booksData.map((data) => (
        <Book key={data.id} bookDetails={data}></Book>
      ))}
    </div>
  )
}

export default Booklist;