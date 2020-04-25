import React from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

import SetReminderPage from 'containers/SetReminderPage/Loadable';
import SummaryPage from 'containers/SummaryPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import PageMenu from 'components/PageMenu';

import { PATH_ROOT, PATH_SUMMARY } from './constants';

const makeMenuItem = (pathname, path, title) => [
  <Menu.Item key={path} link active={pathname === path}>
    <Link to={path}>{title}</Link>
  </Menu.Item>,
];

const makeMenuItems = pathname => [
  makeMenuItem(pathname, PATH_ROOT, 'Set a reminder!'),
  makeMenuItem(pathname, PATH_SUMMARY, 'Summary'),
];

export default () => {
  const location = useLocation();

  return (
    <Container>
      <PageMenu items={makeMenuItems(location.pathname)} />
      <Switch>
        <Route exact path={PATH_ROOT} component={SetReminderPage} />
        <Route exact path={PATH_SUMMARY} component={SummaryPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  );
};
