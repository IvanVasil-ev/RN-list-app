import {
  ListModels,
} from '../../models';
import * as types from '../actionsList';
import {
  GetAllPendingActionType,
  GetAllSuccessfulActionType,
  GetAllRejectedActionType,
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
