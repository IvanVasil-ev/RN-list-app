import { all } from 'redux-saga/effects';

import list from './list/sagas';

function* rootSaga() {
  yield all([
    ...list(),
  ]);
}

export default rootSaga;
