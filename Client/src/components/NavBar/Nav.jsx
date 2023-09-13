import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "../NavBar/Nav.module.css";

export default function Nav({ onSearch, randomize }) {
  return (
    <div className={styles.general}>
      {/* <nav2 className={styles.nav2}> */}
      <nav1 className={styles.nav1}>
        <ul>
          <li>
            <Link to="/home">
              <button className={styles.boton}>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button className={styles.boton}>About</button>
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <button className={styles.boton}>Favorites</button>
            </Link>
          </li>
        </ul>
</nav1>
      <ul>
        <li>
          <SearchBar onSearch={onSearch} />
          <button className={styles.random} onClick={randomize}>
            Random
          </button>
        </li>
      </ul>
      {/* </nav2> */}
    </div>
  );
}
