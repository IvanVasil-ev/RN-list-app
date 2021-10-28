import {
  ListModels,
} from '../../models';
import * as actionTypes from '../actionsList';
import {
  ListActionTypes,
  ListState,
} from './types';

const INITIAL_STATE: ListState = {
  isLoading: false,
  errorMessage: null,
  list: null,
  currentItemPreview: null,
};

function reducer(state = INITIAL_STATE, action: ListActionTypes): ListState {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.REHYDRATE: {
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
      };
    }
    case actionTypes.LIST_GET_ALL_PENDING: {
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    }
    case actionTypes.LIST_GET_ALL_SUCCESSFUL: {
      const list = payload as ListModels.ListGetAllResponse;
      return {
        ...state,
        list,
        isLoading: false,
        errorMessage: null,
      };
    }
    case actionTypes.LIST_GET_ALL_REJECTED: {
      const error = payload as ListModels.ListErrorRepsonse;
      return {
        ...state,
        isLoading: false,
        errorMessage: error.message,
      };
    }
    case actionTypes.LIST_GET_NEXT_PAGE_PENDING: {
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    }
    case actionTypes.LIST_GET_NEXT_PAGE_SUCCESSFUL: {
      const nextList = payload as ListModels.ListGetAllResponse & [];
      const newList = [...new Set([...(Array.isArray(state.list) ? state.list : []), ...nextList])];
      return {
        ...state,
        list: newList,
        isLoading: false,
        errorMessage: null,
      };
    }
    case actionTypes.LIST_GET_NEXT_PAGE_REJECTED: {
      const error = payload as ListModels.ListErrorRepsonse;
      return {
        ...state,
        isLoading: false,
        errorMessage: error.message,
      };
    }
    default: return state;
  }
}

export default reducer;
