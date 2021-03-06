import {
  SET_TITLE,
  SET_CONTRACT_END_DATE,
  SET_NOTICE_PERIOD,
  SET_FORM_IS_VALID,
} from './constants';

export const setTitle = title => ({
  type: SET_TITLE,
  payload: title,
});

export const setContractEndDate = contractEndDate => ({
  type: SET_CONTRACT_END_DATE,
  payload: contractEndDate,
});

export const setNoticePeriod = noticePeriod => ({
  type: SET_NOTICE_PERIOD,
  payload: noticePeriod,
});

export const setFormIsValid = formIsValid => ({
  type: SET_FORM_IS_VALID,
  payload: formIsValid,
});
