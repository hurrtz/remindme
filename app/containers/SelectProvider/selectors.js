import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProviders = state => state.SelectProviders || initialState;

const makeSelectProviders = () =>
  createSelector(
    selectProviders,
    selectProvidersState =>
      selectProvidersState.entries.map(provider => ({
        key: provider.id,
        value: provider.id,
        text: provider.company.companyName,
      })),
  );

const makeSelectProvider = () =>
  createSelector(
    selectProviders,
    selectProvidersState => selectProvidersState.selectedValue || '',
  );

const makeSelectProviderName = () =>
  createSelector(
    [makeSelectProviders(), makeSelectProvider()],
    (providers, providerId) =>
      (providers.filter(provider => provider.key === providerId)[0] || {})
        .text || '',
  );

export { makeSelectProviders, makeSelectProvider, makeSelectProviderName };
