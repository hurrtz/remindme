import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSetReminderForm = state => state.SetReminderForm || initialState;

const makeSelectTitle = () =>
  createSelector(
    selectSetReminderForm,
    setReminderFormState => setReminderFormState.title || '',
  );

const makeSelectContractEndDate = () =>
  createSelector(
    selectSetReminderForm,
    setReminderFormState => setReminderFormState.contractEndDate || '',
  );

const makeSelectNoticePeriod = () =>
  createSelector(
    selectSetReminderForm,
    setReminderFormState => setReminderFormState.noticePeriod || '',
  );

const makeSelectFormIsValid = () =>
  createSelector(
    selectSetReminderForm,
    setReminderFormState => setReminderFormState.formIsValid,
  );

export {
  makeSelectTitle,
  makeSelectContractEndDate,
  makeSelectNoticePeriod,
  makeSelectFormIsValid,
};
