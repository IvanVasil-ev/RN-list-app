import { RehydrateAction } from 'redux-persist';

import { ListModels } from '../../models';
import * as actionsTypes from '../actionsList';

export type ListState = {
  isLoading: boolean;
  errorMessage: string | null;
  list: ListModels.ListGetAllResponse;
  currentItemPreview: ListModels.ListItemPreview;
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
  readonly payload: ListModels.ListGetAllResponse;
}

export interface SetItemPreviewActionType {
  readonly type: typeof actionsTypes.LIST_SET_ITEM_PREVIEW;
}

export interface ClearItemPreviewActionType {
  readonly type: typeof actionsTypes.LIST_CLEAR_ITEM_PREVIEW;
}

export type ListActionTypes = GetAllPendingActionType
| GetAllSuccessfulActionType
| GetAllRejectedActionType
| SetItemPreviewActionType
| ClearItemPreviewActionType
| RehydrateAction;
