import { UPDATE_LOGIN_FIELD, SAVE_USER_DATA } from '../actions/auth';

const initialState = {
  email: '',
  password: '',
  // indique si l'utilisateur est authentifié
  logged: false,
  // pseudo de l'utilisateur
  nickname: null,
  // token
  token: null,
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Property_Accessors
    // on a deux façons d'accéder à la valeur d'une propriété d'un objet
    // - monObj.nomPropriété
    // - monObj['nomPropriété']
    // => avec la deuxième forme, on peut utiliser une variable qui contient le
    // nom de la propriété
    // let target = 'nomPropriété';
    // monObj[target]

    case UPDATE_LOGIN_FIELD:
      return {
        ...state,
        // on est prêts à gérer un formulaire de 50 champs avec une seule action
        [action.name]: action.newValue,
      };

    case SAVE_USER_DATA:
      return {
        ...state,
        logged: action.logged,
        token: action.token,
        nickname: action.nickname,
      };

    default:
      return state;
  }
}

export default authReducer;
