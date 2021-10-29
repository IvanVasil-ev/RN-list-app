import {
  ListModels,
} from '../../models';
import * as types from '../actionsList';
import {
  GetFirstPagePendingActionType,
  GetFirstPageSuccessfulActionType,
  GetFirstPageRejectedActionType,
  LoadNextPagePendingActionType,
  LoadNextPageSuccessfulActionType,
  LoadNextPageRejectedActionType,
  ChangeValueActionType,
  UpdateListSuccessfulActionType,
  UpdateListRejectedActionType,
  UpdateListPendingActionType,
} from './types';

export const getFirstPagePending = (
  payload: ListModels.ListGetPageRequest,
): GetFirstPagePendingActionType => ({
  type: types.LIST_GET_FIRST_PAGE_PENDING,
  payload,
});

export const getFirstPageSuccessful = (
  payload: ListModels.ListGetPageResponse,
): GetFirstPageSuccessfulActionType => ({
  type: types.LIST_GET_FIRST_PAGE_SUCCESSFUL,
  payload,
});

export const getFirstPageRejected = (
  payload: ListModels.ListErrorRepsonse,
): GetFirstPageRejectedActionType => ({
  type: types.LIST_GET_FIRST_PAGE_REJECTED,
  payload,
});

export const getNextPagePending = (
  payload: ListModels.ListGetPageRequest,
): LoadNextPagePendingActionType => ({
  type: types.LIST_GET_NEXT_PAGE_PENDING,
  payload,
});

export const getNextPageSuccessful = (
  payload: ListModels.ListGetPageResponse,
): LoadNextPageSuccessfulActionType => ({
  type: types.LIST_GET_NEXT_PAGE_SUCCESSFUL,
  payload,
});

export const getNextPageRejected = (
  payload: ListModels.ListErrorRepsonse,
): LoadNextPageRejectedActionType => ({
  type: types.LIST_GET_NEXT_PAGE_REJECTED,
  payload,
});

export const updateListPending = (
  payload: ListModels.ListGetPageRequest,
): UpdateListPendingActionType => ({
  type: types.LIST_UPDATE_PENDING,
  payload,
});

export const updateListSuccessful = (
  payload: ListModels.ListGetPageResponse,
): UpdateListSuccessfulActionType => ({
  type: types.LIST_UPDATE_SUCCESSFUL,
  payload,
});

export const updateListRejected = (
  payload: ListModels.ListErrorRepsonse,
): UpdateListRejectedActionType => ({
  type: types.LIST_UPDATE_REJECTED,
  payload,
});

export const changeValue = (
  payload: ListModels.ListChangeValue,
): ChangeValueActionType => ({
  type: types.LIST_CHANGE_VALUE,
  payload,
});
