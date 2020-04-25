import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import { makeSelectCategory } from 'containers/SelectCategory/selectors';

import { setProviders } from './actions';
import { makeSelectProviders } from './selectors';
import { FETCH_PROVIDERS, FETCH_PROVIDERS_API } from './constants';

export function* fetchProviders() {
  const providers = yield select(makeSelectProviders());
  const selectedCategory = yield select(makeSelectCategory());

  if (selectedCategory && (!providers || !providers.length)) {
    const fetchedProviders = yield call(
      request,
      `${FETCH_PROVIDERS_API}/${selectedCategory}`,
    );

    yield put(
      setProviders(
        [...fetchedProviders].sort((providerA, providerB) => {
          if (providerA.company.companyName < providerB.company.companyName) {
            return -1;
          }

          if (providerA.company.companyName > providerB.company.companyName) {
            return 1;
          }

          return 0;
        }),
      ),
    );
  }
}

export default function* selectProvidersSaga() {
  yield takeLatest(FETCH_PROVIDERS, fetchProviders);
}
