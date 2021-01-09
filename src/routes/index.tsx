import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Post from '../pages/post';

import Contato from '../pages/Contato';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/contato" component={Contato} />
      <Route path="/:postName" component={Post} />
    </Switch>
  );
};

export default Routes;
