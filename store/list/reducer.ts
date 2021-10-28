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
  currentItemPreview: {},
};

function reducer(state = INITIAL_STATE, action: ListActionTypes): ListState {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.REHYDRATE: {
      return {
        ...state,
        ...(payload?.auth ?? {}),
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
      const error = payload as ListModels.ListGetAllResponse;
      return {
        ...state,
        isLoading: false,
        errorMessage: error.message,
      };
    }
    case actionTypes.LIST_SET_ITEM_PREVIEW: {
      const currentItemPreview = payload as ListModels.ListItemPreview;
      return {
        ...state,
        currentItemPreview,
      };
    }
    case actionTypes.LIST_CLEAR_ITEM_PREVIEW: {
      return {
        ...state,
        currentItemPreview: {},
      };
    }
    default: return state;
  }
}

export default reducer;
