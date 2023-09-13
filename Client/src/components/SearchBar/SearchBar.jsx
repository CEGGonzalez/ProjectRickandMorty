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
      <input className={styles.Imput}
        type="search"
        placeholder="Search Character"
        onChange={changeHandler}
      />
      <button className={styles.boton}
        onClick={() => {
          onSearch(id);
        }}
      >
      To Add
      </button>
    </div>
  );
}
