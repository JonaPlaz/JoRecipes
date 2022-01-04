/* actions qui concernent l'authentification */

// === action types
export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';
export const LOG_IN = 'LOG_IN';

// === action creators
export const updateLoginField = (newValue, name) => ({
  type: UPDATE_LOGIN_FIELD,
  newValue: newValue,
  name: name,
});

export const logIn = () => ({
  type: LOG_IN,
});
