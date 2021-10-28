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
  payload: ListModels.ListGetAllResponse,
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
  payload: ListModels.ListGetAllResponse,
): LoadNextPageRejectedActionType => ({
  type: types.LIST_GET_NEXT_PAGE_REJECTED,
  payload,
});
