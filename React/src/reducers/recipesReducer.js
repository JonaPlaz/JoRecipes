import { SAVE_RECIPES } from 'src/actions/recipes';

const initialState = {
  recipesList: [],
  favorites: [],
  recipesLoaded: false,
};

function recipesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        recipesList: action.recipes,
        recipesLoaded: true,
      };

    default:
      return state;
  }
}

export default recipesReducer;
