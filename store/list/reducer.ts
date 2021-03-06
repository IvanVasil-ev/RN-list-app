import {
  ListModels,
} from '../../models';
import { ListChangeValue } from '../../models/List';
import * as actionTypes from '../actionsList';
import {
  ListActionTypes,
  ListState,
} from './types';

const INITIAL_STATE: ListState = {
  isLoading: false,
  isDelayed: false,
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
    case actionTypes.LIST_GET_FIRST_PAGE_PENDING: {
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    }
    case actionTypes.LIST_GET_FIRST_PAGE_SUCCESSFUL: {
      const list = payload as ListModels.ListGetPageResponse;
      return {
        ...state,
        list,
        isLoading: false,
        isDelayed: true,
        errorMessage: null,
      };
    }
    case actionTypes.LIST_GET_FIRST_PAGE_REJECTED: {
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
      const nextList = payload as ListModels.ListGetPageResponse & [];
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
    case actionTypes.LIST_CHANGE_VALUE: {
      const { key, value } = payload as ListChangeValue;
      return {
        ...state,
        [key]: value,
      };
    }
    case actionTypes.LIST_UPDATE_PENDING: {
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    }
    case actionTypes.LIST_UPDATE_SUCCESSFUL: {
      const list = payload as ListModels.ListGetPageResponse;
      return {
        ...state,
        list,
        isLoading: false,
        isDelayed: true,
        errorMessage: null,
      };
    }
    case actionTypes.LIST_UPDATE_REJECTED: {
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
