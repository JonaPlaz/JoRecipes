import { connect } from 'react-redux';

// on importe le composant de présentation
import Home from 'src/components/Home';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  recipes: state.recipes.recipesList,
});

// === création de l'assistant
export default connect(mapStateToProps)(Home);
