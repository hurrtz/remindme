import produce from 'immer';
import {
  SET_TITLE,
  SET_CONTRACT_END_DATE,
  SET_NOTICE_PERIOD,
  SET_FORM_IS_VALID,
} from './constants';

export const initialState = {
  title: undefined,
  contractEndDate: undefined,
  noticePeriod: undefined,
  formIsValid: false,
};

/* eslint-disable default-case, no-param-reassign */
const setReminderPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_TITLE:
        draft.title = action.payload;
        break;

      case SET_CONTRACT_END_DATE:
        draft.contractEndDate = action.payload;
        break;

      case SET_NOTICE_PERIOD:
        draft.noticePeriod = action.payload;
        break;

      case SET_FORM_IS_VALID:
        draft.formIsValid = action.payload;
    }
  });

export default setReminderPageReducer;
