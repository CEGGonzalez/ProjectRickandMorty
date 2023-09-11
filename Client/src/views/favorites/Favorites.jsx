import { useSelector, useDispatch } from "react-redux";
import { sortById, filterByGender, reset } from "../../redux/actions/actions";
import Cards from "../../components/Cards/Cards";
import Styles from '../favorites/favorites.module.css'
export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);

  function sortHandler(event) {
    if (event.target && event.target.value) {
    dispatch(sortById(event.target.value));
    }
  }

  function filterHandler(event) {
    if (event.target && event.target.value) {
    dispatch(filterByGender(event.target.value));
    }
  }
  function resetHandler() {
    dispatch(reset());
  }

  return (
    <div className={Styles.fav}>
      <select placeholder="Gender" onChange={filterHandler}>
        {["Male", "Female", "unknown", "Genderless"].map((gender) => (
          <option key={gender} value={gender}>
            {gender}
          </option>
        ))}
      </select>
      <select placeholder="Sort" onChange={sortHandler}>
        {["Ascendente", "Descendente"].map((order,) => (
          <option key={order} value={order}>
            {order}
          </option>
        ))}
      </select>
      <button onClick={resetHandler}>RESET</button>
      <Cards characters={favorites} />
    </div>
  );
}

 

