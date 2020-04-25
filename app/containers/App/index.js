import React, { memo } from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Container, Menu } from 'semantic-ui-react';

import { makeSelectFormIsValid } from 'containers/SetReminderPage/selectors';

import SetReminderPage from 'containers/SetReminderPage/Loadable';
import SummaryPage from 'containers/SummaryPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import PageMenu from 'components/PageMenu';

import { PATH_ROOT, PATH_SUMMARY } from './constants';

const makeMenuItems = (pathname, formIsValid) => [
  <Menu.Item key={PATH_ROOT} link active={pathname === PATH_ROOT}>
    <Link to={PATH_ROOT}>Set a reminder!</Link>
  </Menu.Item>,
  <Menu.Item
    key={PATH_SUMMARY}
    link={formIsValid}
    active={pathname === PATH_SUMMARY}
  >
    {formIsValid ? (
      <Link to={PATH_SUMMARY}>Summary</Link>
    ) : (
      <span>Summary</span>
    )}
  </Menu.Item>,
];

const App = ({ formIsValid }) => {
  const location = useLocation();

  return (
    <Container>
      <PageMenu items={makeMenuItems(location.pathname, formIsValid)} />
      <Switch>
        <Route exact path={PATH_ROOT} component={SetReminderPage} />
        <Route exact path={PATH_SUMMARY} component={SummaryPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  );
};

App.propTypes = {
  formIsValid: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  formIsValid: makeSelectFormIsValid(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(App);
