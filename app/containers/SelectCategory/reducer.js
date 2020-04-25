import produce from 'immer';
import { SET_CATEGORY, SET_CATEGORIES } from './constants';

export const initialState = {
  selectedValue: undefined,
  entries: [],
};

/* eslint-disable default-case, no-param-reassign */
const selectCategoriesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_CATEGORY:
        draft.selectedValue = action.payload;
        break;

      case SET_CATEGORIES:
        draft.entries = action.payload;
        break;
    }
  });

export default selectCategoriesReducer;
