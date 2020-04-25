import React, { memo, useCallback } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import { makeSelectCategory } from 'containers/SetReminderPage/selectors';
import { setCategory } from 'containers/SetReminderPage/actions';

const SelectCategory = ({ category, onChange: _onChange }) => {
  const onChange = useCallback(debounce(_onChange, 250), []);
  const handleChange = event => onChange(event.target.value);

  return (
    <Form.Field required>
      <Form.Input
        placeholder="Category"
        fluid
        value={category}
        onChange={handleChange}
      />
    </Form.Field>
  );
};

SelectCategory.propTypes = {
  category: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  category: makeSelectCategory(),
});

const mapDispatchToProps = dispatch => ({
  onChange: category => dispatch(setCategory(category)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SelectCategory);
