import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "../NavBar/Nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <div className={styles.general}>
      <nav1 className={styles.nav1}>
        <Link to="/home">
          <button className={styles.boton}>Home</button>
        </Link>

        <Link to="/about">
          <button className={styles.boton}>About</button>
        </Link>

        <Link to="/favorites">
          <button className={styles.boton}>Favorites</button>
        </Link>
      </nav1>

      <SearchBar onSearch={onSearch} />
    </div>
  );
}
