import { connect } from 'react-redux';

// on importe le composant de présentation
import LoginForm from 'src/components/LoginForm';

import { updateLoginField, logIn } from '../../actions/auth';

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newValue, name) => {
    // console.log(`newValue=${newValue}, name=${name}`);
    const action = updateLoginField(newValue, name);
    dispatch(action);
  },
  handleLogin: () => {
    dispatch(logIn());
  },
});

// === création de l'assistant
export default connect(mapDispatchToProps)(LoginForm);
