import produce from 'immer';
import {
  SET_TITLE,
  SET_CATEGORY,
  SET_PROVIDER,
  SET_CONTRACT_END_DATE,
  SET_NOTICE_PERIOD,
} from './constants';

export const initialState = {
  title: undefined,
  category: undefined,
  provider: undefined,
  contractEndDate: undefined,
  noticePeriod: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const setReminderPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_TITLE:
        draft.title = action.payload;
        break;

      case SET_CATEGORY:
        draft.category = action.payload;
        break;

      case SET_PROVIDER:
        draft.provider = action.payload;
        break;

      case SET_CONTRACT_END_DATE:
        draft.contractEndDate = action.payload;
        break;

      case SET_NOTICE_PERIOD:
        draft.noticePeriod = action.payload;
        break;
    }
  });

export default setReminderPageReducer;
