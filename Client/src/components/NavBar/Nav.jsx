import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "../NavBar/navBar.css"

export default function Nav({ onSearch, randomize }) {
  return (
    <div className="navContainer">
      <div>
      <Link to="/home">
        <button className="button">Home</button>
      </Link>

      <Link to="/about">
        <button className="button">About</button>
      </Link>

      <Link to="/favorites">
        <button className="button">Favoritos</button>
      </Link>
      </div>

      <SearchBar onSearch={onSearch} />
      <button className="button" onClick={randomize}>Random</button>
    </div>
  );
}

 
