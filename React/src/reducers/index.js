import { combineReducers } from 'redux';

// on importe tous les reducers
import recipesReducer from './recipesReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  // on crée un tiroir qui s'appelle recipes, et c'est recipesReducer qui
  // va gérer les données dans ce tiroir
  recipes: recipesReducer,
  auth: authReducer,
});

export default rootReducer;
