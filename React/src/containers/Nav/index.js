import { connect } from 'react-redux';

// on importe le composant de présentation
import Nav from 'src/components/Nav';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  // ici recipes est le nom du tiroir (on a prévu plusieurs reducers)
  recipes: state.recipes.recipesList,
});


// === création de l'assistant
export default connect(mapStateToProps)(Nav);
