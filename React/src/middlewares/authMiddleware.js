import axios from 'axios';
import { LOG_IN, saveUserData } from '../actions/auth';
import { FETCH_FAVORITES, fetchFavorites, saveFavorites } from '../actions/recipes';

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware auth: ', action);

  switch (action.type) {
    case LOG_IN: {
      // on va piocher les informations dans le tiroir du state
      const { email, password } = store.getState().auth;

      // c'est équivalent à :
      // const email = store.getState().auth.email;
      // const password = store.getState().auth.password;

      axios.post(
        'http://localhost:3001/login',
        {
          email: email,
          password: password,
        },
      )
        .then((response) => {
          // console.log(response);

          const newAction = saveUserData(
            response.data.token,
            response.data.pseudo,
            response.data.logged,
          );
          store.dispatch(newAction);

          store.dispatch(fetchFavorites());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    case FETCH_FAVORITES:
      // console.log('on va aller chercher les recettes préférées');

      // on envoie le token : dans le header Authorization, en précisant le mot
      // "Bearer" avant le token
      axios.post(
        // URL
        'http://localhost:3001/favorites',
        // données
        {},
        // options, notamment les headers
        {
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveFavorites(response.data.favorites));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default authMiddleware;
