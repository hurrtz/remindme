import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Container, Card, Header } from 'semantic-ui-react';

import {
  makeSelectTitle,
  makeSelectContractEndDate,
  makeSelectNoticePeriod,
} from 'containers/SetReminderPage/selectors';
import { makeSelectCategoriesName as makeSelectCategory } from 'containers/SelectCategory/selectors';
import { makeSelectProviderName as makeSelectProvider } from 'containers/SelectProvider/selectors';

import messages from './messages';

const SummaryPage = ({
  title,
  category,
  provider,
  contractEndDate,
  noticePeriod,
}) => (
  <Container>
    <Header as="h1">
      <FormattedMessage {...messages.header} />
    </Header>
    <Container>
      <Card fluid header="Title" description={title} />
      <Card fluid header="Category" description={category} />
      <Card fluid header="Provider" description={provider} />
      <Card fluid header="Contract End Date" description={contractEndDate} />
      {noticePeriod && (
        <Card fluid header="Notice Period" description={noticePeriod} />
      )}
    </Container>
  </Container>
);

SummaryPage.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  contractEndDate: PropTypes.string.isRequired,
  noticePeriod: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  title: makeSelectTitle(),
  category: makeSelectCategory(),
  provider: makeSelectProvider(),
  contractEndDate: makeSelectContractEndDate(),
  noticePeriod: makeSelectNoticePeriod(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(SummaryPage);
