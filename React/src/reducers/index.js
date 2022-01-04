import { combineReducers } from 'redux';

// on importe tous les reducers
import recipesReducer from './recipesReducer';

const rootReducer = combineReducers({
  // on crée un tiroir qui s'appelle recipes, et c'est recipesReducer qui
  // va gérer les données dans ce tiroir
  recipes: recipesReducer,
});

export default rootReducer;
