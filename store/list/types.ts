import { RehydrateAction } from 'redux-persist';

import { ListModels } from '../../models';
import * as actionsTypes from '../actionsList';

export type ListState = {
  isLoading: boolean;
  isDelayed: boolean;
  errorMessage: string | null;
  list: ListModels.ListGetAllResponse;
  currentItemPreview: ListModels.ListItemPreview | null;
};

export interface GetAllPendingActionType {
  type: typeof actionsTypes.LIST_GET_ALL_PENDING;
  payload: ListModels.ListGetAllRequest;
}

export interface GetAllSuccessfulActionType {
  readonly type: typeof actionsTypes.LIST_GET_ALL_SUCCESSFUL;
  readonly payload: ListModels.ListGetAllResponse;
}

export interface GetAllRejectedActionType {
  readonly type: typeof actionsTypes.LIST_GET_ALL_REJECTED;
  readonly payload: ListModels.ListErrorRepsonse;
}

export interface LoadNextPagePendingActionType {
  type: typeof actionsTypes.LIST_GET_NEXT_PAGE_PENDING;
  payload: ListModels.ListGetAllRequest;
}

export interface LoadNextPageSuccessfulActionType {
  readonly type: typeof actionsTypes.LIST_GET_NEXT_PAGE_SUCCESSFUL;
  readonly payload: ListModels.ListGetAllResponse;
}

export interface LoadNextPageRejectedActionType {
  readonly type: typeof actionsTypes.LIST_GET_NEXT_PAGE_REJECTED;
  readonly payload: ListModels.ListErrorRepsonse;
}

export interface ChangeValueActionType {
  readonly type: typeof actionsTypes.LIST_CHANGE_VALUE;
  readonly payload: ListModels.ListChangeValue;
}

export interface UpdateListPendingActionType {
  readonly type: typeof actionsTypes.LIST_UPDATE_PENDING;
  readonly payload: ListModels.ListGetAllRequest;
}

export interface UpdateListSuccessfulActionType {
  readonly type: typeof actionsTypes.LIST_UPDATE_SUCCESSFUL;
  readonly payload: ListModels.ListGetAllResponse;
}

export interface UpdateListRejectedActionType {
  readonly type: typeof actionsTypes.LIST_UPDATE_REJECTED;
  readonly payload: ListModels.ListErrorRepsonse;
}

export type ListActionTypes = ChangeValueActionType
| GetAllPendingActionType
| GetAllSuccessfulActionType
| GetAllRejectedActionType
| LoadNextPagePendingActionType
| LoadNextPageSuccessfulActionType
| LoadNextPageRejectedActionType
| UpdateListPendingActionType
| UpdateListSuccessfulActionType
| UpdateListRejectedActionType
| RehydrateAction;
