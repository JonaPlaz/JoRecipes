import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';

import Header from './Header';

import './page.scss';

const Page = () => (
  <main className="page">
    <Header />
    <div className="page-content">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/recipe/:slug">
        <Recipe />
      </Route>
    </div>
  </main>
);

export default Page;
