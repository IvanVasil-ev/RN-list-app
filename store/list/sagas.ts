import axios, { AxiosPromise } from 'axios';
import {
  call,
  put,
  delay,
  select,
  takeLatest,
} from 'redux-saga/effects';

import * as actionTypes from '../actionsList';
import {
  getAllPending,
  getlAllSuccessful,
  getAllRejected,
  getNextPageSuccessful,
  updateListPending,
  updateListSuccessful,
  updateListRejected,
} from './actions';
import {
  BASE_URL,
  ITEMS_QUANTITY,
} from '../../constants';

const apiCall = (config: any): AxiosPromise<any> => axios(config); // TODO: Change "any"

function* getPage({
  payload,
}: ReturnType<typeof getAllPending>) {
  try {
    const isDelayed: boolean = yield select((state) => state.list.isDelayed);
    const config = {
      method: 'GET',
      url: `${BASE_URL}?per_page=${ITEMS_QUANTITY}&page=${payload}`,
      Headers: {
        acept: 'application/vnd.github.v3+json',
      },
    };
    if (isDelayed) {
      yield delay(15000);
    }
    const { data } = yield call(apiCall, config);
    if (payload === 1) {
      yield put(getlAllSuccessful(data));
    } else {
      yield put(getNextPageSuccessful(data));
    }
  } catch (e) {
    yield put(getAllRejected(e as any)); // TODO: Change "any"
  }
}

function* updateList({
  payload,
}: ReturnType<typeof updateListPending>) {
  try {
    const offset = payload * ITEMS_QUANTITY;

    const config = {
      method: 'GET',
      url: `${BASE_URL}?per_page=${offset}`,
      Headers: {
        acept: 'application/vnd.github.v3+json',
      },
    };

    const { data } = yield call(apiCall, config);
    yield put(updateListSuccessful(data));
  } catch (e) {
    yield put(updateListRejected(e as any)); // TODO: Change "any"
  }
}

function* watch(): Generator {
  yield takeLatest(actionTypes.LIST_GET_FIRST_PAGE_PENDING, getPage);
  yield takeLatest(actionTypes.LIST_UPDATE_PENDING, updateList);
  yield takeLatest(actionTypes.LIST_GET_NEXT_PAGE_PENDING, getPage);
}

export default watch;
