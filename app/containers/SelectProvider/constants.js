import PropTypes from 'prop-types';

export const SET_PROVIDER = 'SET_PROVIDER';
export const FETCH_PROVIDERS = 'FETCH_PROVIDERS';
export const SET_PROVIDERS = 'SET_PROVIDERS';

export const FETCH_PROVIDERS_API =
  'https://api-gateway.remind.me/provider/categoryProvider/category';

export const CompanyProps = PropTypes.shape({
  id: PropTypes.string,
  created: PropTypes.string,
  lastModified: PropTypes.string,
  companyName: PropTypes.string,
  externalId: PropTypes.number,
  companySource: PropTypes.string,
  slug: PropTypes.string,
  externalLogoUrl: PropTypes.string,
  imagePath: PropTypes.string,
  blacklisted: PropTypes.bool,
  finoSupplierId: PropTypes.string,
});
