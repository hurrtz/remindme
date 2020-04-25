import React, { memo, useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Header, Container, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { Redirect } from 'react-router-dom';

import { useInjectReducer } from 'utils/injectReducer';

import SelectCategory from 'containers/SelectCategory';
import SelectProviders from 'containers/SelectProvider';

import { PATH_SUMMARY } from 'containers/App/constants';

import messages from './messages';
import reducer from './reducer';
import {
  makeSelectTitle,
  makeSelectCategory,
  makeSelectProvider,
  makeSelectContractEndDate,
  makeSelectNoticePeriod,
} from './selectors';
import { setTitle, setNoticePeriod, setContractEndDate } from './actions';

const key = 'SetReminderForm';

const SetReminderPage = ({
  title,
  category,
  provider,
  contractEndDate,
  noticePeriod,
  onChangeTitle: _onChangeTitle,
  onChangeContractEndDate: _onChangeContractEndDate,
  onChangeNoticePeriod: _onChangeNoticePeriod,
}) => {
  const [showSummary, setShowSummary] = useState(false);

  useInjectReducer({ key, reducer });

  const onChangeTitle = useCallback(debounce(_onChangeTitle, 250), []);
  const handleChangeTitle = event => onChangeTitle(event.target.value);

  const onChangeContractEndDate = useCallback(
    debounce(_onChangeContractEndDate, 250),
    [],
  );
  const handleChangeContractEndDate = event =>
    onChangeContractEndDate(event.target.value);

  const onChangeNoticePeriod = useCallback(
    debounce(_onChangeNoticePeriod, 250),
    [],
  );
  const handleChangeNoticePeriod = event =>
    onChangeNoticePeriod(event.target.value);

  const isFormValid = () => title && category && provider && contractEndDate;

  const onSubmit = () => {
    if (isFormValid()) {
      setShowSummary(true);
    }
  };

  if (showSummary) {
    return <Redirect to={PATH_SUMMARY} />;
  }

  return (
    <Container>
      <Header as="h1">
        <FormattedMessage {...messages.header} />
      </Header>
      <Form onSubmit={onSubmit}>
        <Form.Field required>
          <Form.Input
            placeholder="Title"
            fluid
            value={title}
            onChange={handleChangeTitle}
          />
        </Form.Field>
        <SelectCategory />
        <SelectProviders />
        <Form.Field required>
          <Form.Input
            placeholder="Contract End Date"
            fluid
            value={contractEndDate}
            onChange={handleChangeContractEndDate}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            placeholder="Notice Period"
            fluid
            value={noticePeriod}
            onChange={handleChangeNoticePeriod}
          />
        </Form.Field>
        <Button type="submit" content="next" disabled={!isFormValid()} />
      </Form>
    </Container>
  );
};

SetReminderPage.propTypes = {
  title: PropTypes.string.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  contractEndDate: PropTypes.string.isRequired,
  onChangeContractEndDate: PropTypes.func.isRequired,
  noticePeriod: PropTypes.string.isRequired,
  onChangeNoticePeriod: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  title: makeSelectTitle(),
  category: makeSelectCategory(),
  provider: makeSelectProvider(),
  contractEndDate: makeSelectContractEndDate(),
  noticePeriod: makeSelectNoticePeriod(),
});

const mapDispatchToProps = dispatch => ({
  onChangeTitle: title => dispatch(setTitle(title)),
  onChangeContractEndDate: contractEndDate =>
    dispatch(setContractEndDate(contractEndDate)),
  onChangeNoticePeriod: noticePeriod => dispatch(setNoticePeriod(noticePeriod)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SetReminderPage);
