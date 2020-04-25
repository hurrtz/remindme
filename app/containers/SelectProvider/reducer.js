import produce from 'immer';
import { SET_PROVIDER, SET_PROVIDERS } from './constants';

export const initialState = {
  selectedValue: undefined,
  entries: [],
};

/* eslint-disable default-case, no-param-reassign */
const selectProvidersReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_PROVIDER:
        draft.selectedValue = action.payload;
        break;

      case SET_PROVIDERS:
        draft.entries = action.payload;
        break;
    }
  });

export default selectProvidersReducer;
