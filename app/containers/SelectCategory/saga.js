import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import { setCategories } from './actions';
import { makeSelectCategories } from './selectors';
import { FETCH_CATEGORIES, FETCH_CATEGORIES_API } from './constants';

export function* fetchCategories() {
  const categories = yield select(makeSelectCategories());

  if (!categories || !categories.length) {
    const fetchedCategories = yield call(request, FETCH_CATEGORIES_API);

    yield put(
      setCategories(
        [...fetchedCategories].sort((categoryA, categoryB) => {
          if (categoryA.categoryName < categoryB.categoryName) {
            return -1;
          }

          if (categoryA.categoryName > categoryB.categoryName) {
            return 1;
          }

          return 0;
        }),
      ),
    );
  }
}

export default function* selectCategoriesSaga() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategories);
}
