import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Header, Container, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { useInjectReducer } from 'utils/injectReducer';

import SelectCategory from 'containers/SelectCategory';
import SelectProviders from 'containers/SelectProvider';

import messages from './messages';
import reducer from './reducer';
import {
  makeSelectTitle,
  makeSelectContractEndDate,
  makeSelectNoticePeriod,
} from './selectors';
import { setTitle, setNoticePeriod, setContractEndDate } from './actions';

const key = 'SetReminderForm';

const SetReminderPage = ({
  title,
  contractEndDate,
  noticePeriod,
  onChangeTitle,
  onChangeContractEndDate,
  onChangeNoticePeriod,
}) => {
  useInjectReducer({ key, reducer });

  return (
    <Container>
      <Header as="h1">
        <FormattedMessage {...messages.header} />
      </Header>
      <Form>
        <Form.Field required>
          <Form.Input
            placeholder="Title"
            fluid
            value={title}
            onChange={onChangeTitle}
          />
        </Form.Field>
        <SelectCategory />
        <SelectProviders />
        <Form.Field required>
          <Form.Input
            placeholder="Contract End Date"
            fluid
            value={contractEndDate}
            onChange={onChangeContractEndDate}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            placeholder="Notice Period"
            fluid
            value={noticePeriod}
            onChange={onChangeNoticePeriod}
          />
        </Form.Field>
        <Button type="submit" content="next" />
      </Form>
    </Container>
  );
};

SetReminderPage.propTypes = {
  title: PropTypes.string.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  contractEndDate: PropTypes.string.isRequired,
  onChangeContractEndDate: PropTypes.func.isRequired,
  noticePeriod: PropTypes.string.isRequired,
  onChangeNoticePeriod: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  title: makeSelectTitle(),
  contractEndDate: makeSelectContractEndDate(),
  noticePeriod: makeSelectNoticePeriod(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeTitle: title => dispatch(setTitle(title.target.value)),
    onChangeContractEndDate: contractEndDate =>
      dispatch(setContractEndDate(contractEndDate.target.value)),
    onChangeNoticePeriod: noticePeriod =>
      dispatch(setNoticePeriod(noticePeriod.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SetReminderPage);
