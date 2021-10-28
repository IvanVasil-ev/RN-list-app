import { combineReducers } from 'redux';

import list from './list/reducer';

export const rootReducer = combineReducers({
  list,
});

export type RootState = ReturnType<typeof rootReducer>;
