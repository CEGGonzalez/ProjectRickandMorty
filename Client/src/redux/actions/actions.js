import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ORDER,
  FILTER,
  RESET,
} from "./action-types";
import axios from "axios";

export function addFavorite(character) {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
   return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);

      if(!data.length) throw Error('No hay favoritos')
      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    } catch (error) {
      console.log(error.message)
   } 
  }
}

export function removeFavorite(id) {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);

      if(!data) throw Error('No hay favoritos');
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
      
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function filterByGender(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function sortById(order) {
  return {
    type: ORDER,
    payload: order
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
