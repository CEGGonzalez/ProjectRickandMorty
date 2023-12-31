import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./detail.css";
import rimage from "../../assets/morty.gif";

function Detail() {
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className="background-detail">
      <div className="detail-container">
        <div className="img-container">
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
        <div className="details">
          <div>
            <h3>Species:</h3>
            <p>{character.species}</p>
          </div>
          <div>
            <h3>Gender:</h3>
            <p>{character.gender}</p>
          </div>
          <div>
            <h3>Status:</h3>
            <p>{character.status}</p>
          </div>
          <div>
            <h3>Origin:</h3>
            <p>{character.origin?.name}</p>
          </div>
          </div>

      </div>
        <div>
        <img className="rimage" src={rimage} alt="" />
        </div>
    </div>
  );
}

export default Detail;
