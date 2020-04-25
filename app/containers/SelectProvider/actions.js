import { SET_PROVIDERS, SET_PROVIDER, FETCH_PROVIDERS } from './constants';

export const setProvider = provider => ({
  type: SET_PROVIDER,
  payload: provider,
});

export const setProviders = providers => ({
  type: SET_PROVIDERS,
  payload: providers,
});

export const fetchProviders = () => ({ type: FETCH_PROVIDERS });
