import React, { memo } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { makeSelectCategory } from 'containers/SetReminderPage/selectors';
import { setCategory } from 'containers/SetReminderPage/actions';

const SelectCategory = ({ category, onChange }) => (
  <Form.Field required>
    <Form.Input
      placeholder="Category"
      fluid
      value={category}
      onChange={onChange}
    />
  </Form.Field>
);

SelectCategory.propTypes = {
  category: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  category: makeSelectCategory(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChange: category => dispatch(setCategory(category.target.value)),
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
