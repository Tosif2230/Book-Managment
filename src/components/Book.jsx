import "../index.css";

function Book(props) {
  return (
    <div id="card" style={{ width:"250px", backgroundColor: "#fff", margin: "20px", display: "flex", flexDirection: "column", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.5)", transition:"trasform 0.2s", height:"400px", overflow:"hidden"}}>
      <img src={props.bookDetails.image} alt="Book Img" width="200px" height="200px" style={{width:"100%"}}/>
      <div style={{padding: "15px"}}>
      <h2 style={{fontSize:"1em", marginBottom:"10px"}}>{props.bookDetails.title}</h2>
      <h2 style={{fontSize: "0.9em", marginBottom: "10px", color:"#555"}}>{props.bookDetails.author}</h2>
      <h2 style={{fontSize:"1em", color:"#777"}}>{props.bookDetails.description}</h2>
      </div>
    </div>
  )
}

export default Book;