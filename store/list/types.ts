import { Method } from 'axios';
import { RehydrateAction } from 'redux-persist';

import { ListModels } from '../../models';
import * as actionsTypes from '../actionsList';

type HeadersProps = {
  accept: string;
}

export type ServerRequest = {
  method: Method;
  url: string;
  Headers: HeadersProps;
}

export type ListState = {
  isLoading: boolean;
  isDelayed: boolean;
  errorMessage: string | null;
  list: ListModels.ListGetPageResponse;
  currentItemPreview: ListModels.ListItemPreview | null;
};

export interface GetFirstPagePendingActionType {
  type: typeof actionsTypes.LIST_GET_FIRST_PAGE_PENDING;
  payload: ListModels.ListGetPageRequest;
}

export interface GetFirstPageSuccessfulActionType {
  readonly type: typeof actionsTypes.LIST_GET_FIRST_PAGE_SUCCESSFUL;
  readonly payload: ListModels.ListGetPageResponse;
}

export interface GetFirstPageRejectedActionType {
  readonly type: typeof actionsTypes.LIST_GET_FIRST_PAGE_REJECTED;
  readonly payload: ListModels.ListErrorRepsonse;
}

export interface LoadNextPagePendingActionType {
  type: typeof actionsTypes.LIST_GET_NEXT_PAGE_PENDING;
  payload: ListModels.ListGetPageRequest;
}

export interface LoadNextPageSuccessfulActionType {
  readonly type: typeof actionsTypes.LIST_GET_NEXT_PAGE_SUCCESSFUL;
  readonly payload: ListModels.ListGetPageResponse;
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
  readonly payload: ListModels.ListGetPageRequest;
}

export interface UpdateListSuccessfulActionType {
  readonly type: typeof actionsTypes.LIST_UPDATE_SUCCESSFUL;
  readonly payload: ListModels.ListGetPageResponse;
}

export interface UpdateListRejectedActionType {
  readonly type: typeof actionsTypes.LIST_UPDATE_REJECTED;
  readonly payload: ListModels.ListErrorRepsonse;
}

export type ListActionTypes = ChangeValueActionType
| GetFirstPagePendingActionType
| GetFirstPageSuccessfulActionType
| GetFirstPageRejectedActionType
| LoadNextPagePendingActionType
| LoadNextPageSuccessfulActionType
| LoadNextPageRejectedActionType
| UpdateListPendingActionType
| UpdateListSuccessfulActionType
| UpdateListRejectedActionType
| RehydrateAction;
