import React from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

import SetReminderPage from 'containers/SetReminderPage/Loadable';
import SummaryPage from 'containers/SummaryPage/Loadable';
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
        <Route exact path="/" component={SetReminderPage} />
        <Route exact path="/summary" component={SummaryPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  );
};
