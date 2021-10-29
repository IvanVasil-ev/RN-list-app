import axios, { AxiosRequestConfig, Method } from 'axios';
import {
  call,
  put,
  delay,
  select,
  takeLatest,
} from 'redux-saga/effects';

import * as actionTypes from '../actionsList';
import {
  getFirstPagePending,
  getFirstPageSuccessful,
  getFirstPageRejected,
  getNextPageSuccessful,
  updateListPending,
  updateListSuccessful,
  updateListRejected,
} from './actions';
import {
  BASE_URL,
  ITEMS_QUANTITY,
} from '../../constants';
import { ServerRequest } from './types';

const apiCall = (config: AxiosRequestConfig<ServerRequest>) => axios(config);

function* getPage({
  payload,
}: ReturnType<typeof getFirstPagePending>) {
  try {
    const isDelayed: boolean = yield select((state) => state.list.isDelayed);
    const config = {
      method: 'GET' as Method,
      url: `${BASE_URL}?per_page=${ITEMS_QUANTITY}&page=${payload}`,
      Headers: {
        accept: 'application/vnd.github.v3+json',
      },
    };
    if (isDelayed) {
      yield delay(15000);
    }
    const { data } = yield call<typeof apiCall>(apiCall, config);
    if (payload === 1) {
      yield put(getFirstPageSuccessful(data));
    } else {
      yield put(getNextPageSuccessful(data));
    }
  } catch (e) {
    const error = e as Error;
    yield put(getFirstPageRejected(error));
  }
}

function* updateList({
  payload,
}: ReturnType<typeof updateListPending>) {
  try {
    const offset = payload * ITEMS_QUANTITY;

    const config = {
      method: 'GET' as Method,
      url: `${BASE_URL}?per_page=${offset}`,
      Headers: {
        accept: 'application/vnd.github.v3+json',
      },
    };

    const { data } = yield call<typeof apiCall>(apiCall, config);
    yield put(updateListSuccessful(data));
  } catch (e) {
    const error = e as Error;
    yield put(updateListRejected(error));
  }
}

function* watch(): Generator {
  yield takeLatest(actionTypes.LIST_GET_FIRST_PAGE_PENDING, getPage);
  yield takeLatest(actionTypes.LIST_UPDATE_PENDING, updateList);
  yield takeLatest(actionTypes.LIST_GET_NEXT_PAGE_PENDING, getPage);
}

export default watch;
