import {useState} from "react";
import styles from '../SearchBar/SearchBar.module.css'
export default function SearchBar({onSearch}) {
  const [id, setId] = useState("");

  function changeHandler(event) {
    event.preventDefault();
    setId(event.target.value);
  }

  return (
    <div className={styles.SearchBar}>
      <input
        type="search"
        placeholder="Search Character"
        onChange={changeHandler}
      />
      <button 
        onClick={() => {
          onSearch(id);
        }}
      >
      Agregar
      </button>
    </div>
  );
}
