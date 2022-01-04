import axios from 'axios';
import { LOG_IN } from '../actions/auth';

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
          console.log(response);
          
          store.dispatch(newAction);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default authMiddleware;
