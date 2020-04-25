import React, { memo, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectCategory } from 'containers/SelectCategory/selectors';
import { CategoryProps } from 'containers/SelectCategory/constants';

import { setProvider, fetchProviders } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSelectProviders, makeSelectProvider } from './selectors';
import { CompanyProps } from './constants';

const key = 'SelectProviders';

const SelectProvider = ({
  providers,
  provider,
  category,
  onChange,
  handleFetch,
}) => {
  const handleChange = (_, { value }) => {
    onChange(value);
  };

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    handleFetch();
  }, [category]);

  return (
    <Form.Field required>
      <Form.Select
        selection
        placeholder="Provider"
        value={provider}
        options={providers}
        onChange={handleChange}
        disabled={!providers || !providers.length}
      />
    </Form.Field>
  );
};

SelectProvider.propTypes = {
  providers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      created: PropTypes.string,
      lastModified: PropTypes.string,
      category: CategoryProps,
      company: CompanyProps,
      defaultNoticePeriod: PropTypes.string,
      active: PropTypes.bool,
      sortPriority: PropTypes.number,
      disabled: PropTypes.bool,
    }),
  ),
  category: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleFetch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  provider: makeSelectProvider(),
  providers: makeSelectProviders(),
  category: makeSelectCategory(),
});

const mapDispatchToProps = dispatch => ({
  onChange: category => dispatch(setProvider(category)),
  handleFetch: () => dispatch(fetchProviders()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SelectProvider);
