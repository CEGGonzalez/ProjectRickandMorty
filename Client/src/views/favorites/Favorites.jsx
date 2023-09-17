import { useSelector, useDispatch } from "react-redux";
import { sortById, filterByGender, reset } from "../../redux/actions/actions";
import Cards from "../../components/Cards/Cards";
import Styles from './favorites.module.css'


export default function Favorites() {
  
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);

  function sortHandler(event) {
   
    dispatch(sortById(event.target.value));
    
  }

  function filterHandler(event) {
   
    dispatch(filterByGender(event.target.value));
   
  }

  function resetHandler() {
    dispatch(reset());
  }

  return (
    <div className={Styles.favorit}>
    <div className={Styles.fav}>
      <select className={Styles.select2} onChange={filterHandler}>
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
      <button  className={Styles.boton} onClick={resetHandler}>RESET</button>
      <Cards characters={favorites} />
    </div>
    </div>
  );
}

 

