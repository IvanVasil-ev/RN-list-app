import axios, { AxiosPromise } from 'axios';
import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import * as actionTypes from '../actionsList';
import {
  getAllPending,
  getlAllSuccessful,
  getAllRejected,
  getNextPageSuccessful,
} from './actions';
import {
  BASE_URL,
  ITEMS_QUANTITY,
} from '../../constants';

const apiCall = (config: any): AxiosPromise<any> => axios(config);

function* getPage({ payload }: ReturnType<typeof getAllPending>): Generator {
  try {
    const config = {
      method: 'GET',
      url: `${BASE_URL}?per_page=${ITEMS_QUANTITY}&page=${payload}`,
      Headers: {
        acept: 'application/vnd.github.v3+json',
      },
    };

    const data: any = yield call(apiCall, config);
    return yield put(getlAllSuccessful(data.data));
  } catch (e) {
    return yield put(getAllRejected(e as any));
  }
}

function* getNextPage({ payload }: ReturnType<typeof getAllPending>): Generator {
  try {
    const config = {
      method: 'GET',
      url: `${BASE_URL}?per_page=${ITEMS_QUANTITY}&page=${payload}`,
      Headers: {
        acept: 'application/vnd.github.v3+json',
      },
    };

    const data: any = yield call(apiCall, config);
    return yield put(getNextPageSuccessful(data.data));
  } catch (e) {
    return yield put(getAllRejected(e as any));
  }
}

function* watch(): Generator {
  yield takeLatest(actionTypes.LIST_GET_ALL_PENDING, getPage);
  yield takeLatest(actionTypes.LIST_GET_NEXT_PAGE_PENDING, getNextPage);
}

export default watch;
