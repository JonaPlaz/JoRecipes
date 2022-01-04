// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
// https://reactrouter.com/web/api/Hooks/useparams
import { useParams } from 'react-router-dom';

import { getRecipeBySlug } from 'src/utils';

// == Import : local
// Composants
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

// Style
import './recipe.css';

// on a changé la responsabilité de Recipe : avant il était chargé d'afficher
// telle recette reçue en prop, maintenant il est chargé de sélectionner
// la recette à partir de l'id et l'afficher

/* Plan d'action pour avoir un slug plutôt que l'id dans les URL
x pouvoir calculer le slug qui correspond à un titre
x modifier les Link/NavLink pour utiliser un slug
- modifier la Route et Recipe (récupérer une recette à partir d'un slug)
*/

// == Composant
function Recipe({ recipes }) {
  // console.log(useParams());
  // on récupère les paramètres d'URL : attention c'est des chaines de caractère
  const { slug } = useParams();

  // console.log(`slug=${slug}, recipes=${recipes}`);
  // oups, recipes est vide ici

  const recipe = getRecipeBySlug(slug, recipes);
  // et donc, recipe est undefined
  // console.log('recipe :', recipe);

  // => on essaie d'afficher le détail d'une recette alors que les recettes ne sont
  // pas encore disponibles (on n'a pas encore eu la réponse de l'API)

  return (
    <div className="recipe">
      <Header
        name={recipe.title}
        thumbnail={recipe.thumbnail}
        author={recipe.author}
        difficulty={recipe.difficulty}
      />
      <Ingredients
        list={recipe.ingredients}
      />
      <Instructions
        steps={recipe.instructions}
      />
    </div>
  );
}

Recipe.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      ingredients: PropTypes.array.isRequired,
      instructions: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Recipe;
