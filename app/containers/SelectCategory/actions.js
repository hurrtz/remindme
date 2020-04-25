import { SET_CATEGORIES, SET_CATEGORY, FETCH_CATEGORIES } from './constants';

export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: category,
});

export const setCategories = categories => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const fetchCategories = () => ({ type: FETCH_CATEGORIES });
