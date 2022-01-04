import React from 'react';

import LoginForm from 'src/containers/LoginForm';

const Header = () => (
  <div className="header">
    <h2 className="page-title">JoRecipes</h2>
    <LoginForm
      handleLogout={() => {
        console.log('handleLogout');
      }}
    />
  </div>
);

export default Header;
