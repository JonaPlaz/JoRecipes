// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Nav from 'src/containers/Nav';

import './styles.css';

// == Composant
const App = ({ loadRecipes, recipesLoaded }) => {
  useEffect(() => {
    loadRecipes();
  }, []);

  return (
    <div className="app">
      {recipesLoaded && (
        <>
          <Nav />
        </>
      )}
      {/* {!recipesLoaded && (
        <div>Chargement des recettes...</div>
      )} */}
    </div>
  );
};

App.propTypes = {
  loadRecipes: PropTypes.func.isRequired,
  recipesLoaded: PropTypes.bool.isRequired,
};

// == Export
export default App;
