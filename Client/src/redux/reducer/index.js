import {
  ADD_FAVORITE,
  FILTER,
  REMOVE_FAVORITE,
  ORDER,
  RESET,
} from "../actions/action-types";

let initialState = { myFavorites: [], allCharacters: [] };

function rootReducer(state = initialState, action) {
   
  switch (action.type) {
    case ADD_FAVORITE:
      return { 
        ...state,
         myFavorites: action.payload, 
         allCharacters: action.payload
         };

    case REMOVE_FAVORITE: 
      return { 
        ...state, 
        myFavorites: action.payload, 
        allCharacters: action.payload
      };
      
    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (character) => character.gender === action.payload
        ),
      };

    case ORDER:
      
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? [...state.myFavorites.sort((a, b) => a.id - b.id)]
            : [...state.myFavorites.sort((a, b) => b.id - a.id)],
      };
   
    case RESET:
      return {
        ...state,
        myFavorites: state.allCharacters,
      };

    default:
      return state;
  }
}

export default rootReducer;
