import React, { memo, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { setCategory, fetchCategories } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSelectCategories, makeSelectCategory } from './selectors';
import { CategoryProps } from './constants';

const key = 'SelectCategories';

const SelectCategory = ({ categories, category, onChange, handleFetch }) => {
  const handleChange = (_, { value }) => {
    onChange(value);
  };

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <Form.Field required>
      <Form.Select
        selection
        placeholder="Category"
        value={category}
        options={categories}
        onChange={handleChange}
      />
    </Form.Field>
  );
};

SelectCategory.propTypes = {
  categories: PropTypes.arrayOf(CategoryProps),
  category: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleFetch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  category: makeSelectCategory(),
  categories: makeSelectCategories(),
});

const mapDispatchToProps = dispatch => ({
  onChange: category => dispatch(setCategory(category)),
  handleFetch: () => dispatch(fetchCategories()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SelectCategory);
