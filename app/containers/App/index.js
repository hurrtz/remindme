import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FirstPage from 'containers/FirstPage/Loadable';
import SecondPage from 'containers/SecondPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/summary" component={SecondPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
