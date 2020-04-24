import React, { memo } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { makeSelectProvider } from 'containers/SetReminderPage/selectors';
import { setProvider } from 'containers/SetReminderPage/actions';

const SelectCategory = ({ provider, onChange }) => (
  <Form.Field required>
    <Form.Input
      placeholder="Provider"
      fluid
      value={provider}
      onChange={onChange}
    />
  </Form.Field>
);

SelectCategory.propTypes = {
  provider: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  provider: makeSelectProvider(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChange: provider => dispatch(setProvider(provider.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SelectCategory);
