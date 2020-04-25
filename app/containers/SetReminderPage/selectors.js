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

export { makeSelectTitle, makeSelectContractEndDate, makeSelectNoticePeriod };
