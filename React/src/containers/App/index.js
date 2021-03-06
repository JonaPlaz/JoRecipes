import { connect } from 'react-redux';

import App from 'src/components/App';

import { fetchRecipes } from '../../actions/recipes';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  recipesLoaded: state.recipes.recipesLoaded,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  loadRecipes: () => {
    dispatch(fetchRecipes());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
