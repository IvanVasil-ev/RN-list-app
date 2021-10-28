import {
  ListModels,
} from '../../models';
import * as types from '../actionsList';
import {
  GetAllPendingActionType,
  GetAllSuccessfulActionType,
  GetAllRejectedActionType,
  LoadNextPagePendingActionType,
  LoadNextPageSuccessfulActionType,
  LoadNextPageRejectedActionType,
  ChangeValueActionType,
  UpdateListSuccessfulActionType,
  UpdateListRejectedActionType,
  UpdateListPendingActionType,
} from './types';

export const getAllPending = (
  payload: ListModels.ListGetAllRequest,
): GetAllPendingActionType => ({
  type: types.LIST_GET_ALL_PENDING,
  payload,
});

export const getlAllSuccessful = (
  payload: ListModels.ListGetAllResponse,
): GetAllSuccessfulActionType => ({
  type: types.LIST_GET_ALL_SUCCESSFUL,
  payload,
});

export const getAllRejected = (
  payload: ListModels.ListErrorRepsonse,
): GetAllRejectedActionType => ({
  type: types.LIST_GET_ALL_REJECTED,
  payload,
});

export const getNextPagePending = (
  payload: ListModels.ListGetAllRequest,
): LoadNextPagePendingActionType => ({
  type: types.LIST_GET_NEXT_PAGE_PENDING,
  payload,
});

export const getNextPageSuccessful = (
  payload: ListModels.ListGetAllResponse,
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

export const changeValue = (
  payload: ListModels.ListChangeValue,
): ChangeValueActionType => ({
  type: types.LIST_CHANGE_VALUE,
  payload,
});

export const updateListPending = (
  payload: ListModels.ListGetAllRequest,
): UpdateListPendingActionType => ({
  type: types.LIST_UPDATE_PENDING,
  payload,
});

export const updateListSuccessful = (
  payload: ListModels.ListGetAllResponse,
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
