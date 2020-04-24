import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FirstPage from 'containers/FirstPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
