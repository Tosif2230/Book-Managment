import React from "react";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <ul style={{display:"flex", justifyContent:"center", gap:"20px",listStyle:"none"}}>
        <Link to="/" >
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contect">
          <li>Contect</li>
        </Link>
      </ul>
    </div>
    
  );
}

export default Header;
