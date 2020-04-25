import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCategories = state => state.SelectCategories || initialState;

const makeSelectCategories = () =>
  createSelector(
    selectCategories,
    selectCategoriesState =>
      selectCategoriesState.entries.map(category => ({
        key: category.id,
        value: category.id,
        text: category.categoryName,
      })),
  );

const makeSelectCategory = () =>
  createSelector(
    selectCategories,
    selectCategoriesState => selectCategoriesState.selectedValue || '',
  );

const makeSelectCategoriesName = () =>
  createSelector(
    [makeSelectCategories(), makeSelectCategory()],
    (categories, categoryId) =>
      (categories.filter(category => category.key === categoryId)[0] || {})
        .text || '',
  );

export { makeSelectCategories, makeSelectCategory, makeSelectCategoriesName };
