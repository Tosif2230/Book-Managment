import './App.css'
import Booklist from './components/Booklist'
import {Books} from "./utils/mockData"


function App() {
  
  return (
    <>
      <h1 style={{display:"flex", justifyContent:"center",alignItems:"center", margin:"10px"}}>Interesting Books</h1>
      <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
        <input type="text" placeholder='Search' />
        <button>Search</button>
      </div>
      <Booklist booksData = {Books}/>
    </>
  )
}

export default App
