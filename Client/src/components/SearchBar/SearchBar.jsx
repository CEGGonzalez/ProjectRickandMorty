import {useState} from "react";
import styles from '../SearchBar/SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [id, setId] = useState("");

  function changeHandler(event) {
    event.preventDefault();
    setId(event.target.value);
  }
  // function handleRandomClick() {
  //   const randomId = Math.floor(Math.random() * 826) + 1;

  //   onSearch(randomId);

  //   setId("");
  // }

  return (
    <div className={styles.SearchBar}>
       {/* <button className={styles.random}  onClick={handleRandomClick}>
            Random
          </button> */}
      {/* <input className={styles.Imput}
        type="search"
        value={id}
        placeholder="Search"
        onChange={changeHandler}
      /> */}
      {/* <button className={styles.boton}
        onClick={() => {
          onSearch(id);
        }}
      >
      To Add
      </button> */}
    </div>
  );
}
