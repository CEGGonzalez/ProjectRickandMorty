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
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    });
  };
}

export function removeFavorite(id) {
  const endpoint = `http://localhost:3001/rickandmorty/fav/` + id;
  return (dispatch) => {
    axios.delete(endpoint)
    .then(({ data }) => {
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
    });
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
    payload: order,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
