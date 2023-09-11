/* eslint-disable react-refresh/only-export-components */
import {useState, useEffect} from "react";
import { connect } from "react-redux";
import {addFavorite, removeFavorite} from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import style from '../Card/card.module.css'

function Card(props) {
  const navigate = useNavigate();
  const {character, onClose, myFavorites, addFavorite, removeFavorite} = props;
  const { image, name, species, gender, id } = character;
  
  const [closeBtn, setCloseBtn] = useState(true);
  const [isFav, setIsFav] = useState(false);
  
  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, [onClose]);
  
  useEffect(() => {
    myFavorites?.forEach((fav) => { 
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]); 
  
  function navigateHandler() {
  navigate(`/detail/${character.id}`);
}

  function handleFavorite() {
    if (!isFav) {
      setIsFav(true);
      addFavorite(character); 
    } else {
      setIsFav(false);
      removeFavorite(id); 
      console.log(handleFavorite);
    }
  }

  return (
    <div className={style.characterContainer}>
        <div className={style.characterCard}>
        <img
          className={style.characterImage}
          onClick={navigateHandler}
          src={image}
          alt={name}
          />
        <h2 className={style.name}>{name}</h2>
        {isFav ? ( 
          <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
            )}
            {closeBtn && (
              <button
                className={style.closeButton}
                onClick={() => {
                  onClose(id);
                }}
              >
                X
              </button>
            )}
        <p>{species}</p>
        <p>{gender}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Card);
