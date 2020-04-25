import React, { memo, useCallback } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import { makeSelectProvider } from 'containers/SetReminderPage/selectors';
import { setProvider } from 'containers/SetReminderPage/actions';

const SelectProvider = ({ provider, onChange: _onChange }) => {
  const onChange = useCallback(debounce(_onChange, 250), []);
  const handleChange = event => onChange(event.target.value);

  return (
    <Form.Field required>
      <Form.Input
        placeholder="Provider"
        fluid
        value={provider}
        onChange={handleChange}
      />
    </Form.Field>
  );
};

SelectProvider.propTypes = {
  provider: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  provider: makeSelectProvider(),
});

const mapDispatchToProps = dispatch => ({
  onChange: provider => dispatch(setProvider(provider)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SelectProvider);
