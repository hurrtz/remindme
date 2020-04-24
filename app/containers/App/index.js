import React from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

import FirstPage from 'containers/FirstPage/Loadable';
import SecondPage from 'containers/SecondPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import PageMenu from 'components/PageMenu';

const makeMenuItems = pathname => [
  <Menu.Item key="submit" link active={pathname === '/'}>
    <Link to="/">Set a reminder!</Link>
  </Menu.Item>,
  <Menu.Item key="summary" link active={pathname === '/summary'}>
    <Link to="summary">Summary</Link>
  </Menu.Item>,
];

export default () => {
  const location = useLocation();

  return (
    <Container>
      <PageMenu items={makeMenuItems(location.pathname)} />
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/summary" component={SecondPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  );
};
