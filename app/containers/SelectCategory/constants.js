import PropTypes from 'prop-types';

export const SET_CATEGORY = 'SET_CATEGORY';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SET_CATEGORIES = 'SET_CATEGORIES';

export const FETCH_CATEGORIES_API =
  'https://api-gateway.remind.me/provider/category';

export const CategoryProps = PropTypes.shape({
  id: PropTypes.string,
  created: PropTypes.string,
  lastModified: PropTypes.string,
  categoryType: PropTypes.string,
  categoryName: PropTypes.string,
  slug: PropTypes.string,
  icon: PropTypes.string,
  sortPriority: PropTypes.number,
  description: PropTypes.string,
});
