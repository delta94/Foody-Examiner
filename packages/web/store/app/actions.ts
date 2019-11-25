import * as types from './types';
import { User } from '../../interfaces';

export const appInit = (): types.Action => ({
  type: types.APP_INIT
});

export const appLoading = (): types.Action => ({
  type: types.APP_LOADING
});

export const appLoaded = (): types.Action => ({
  type: types.APP_LOADED
});

export const receiveUser = (
  token: string,
  user: User
): types.ReceiveUserAction => ({
  type: types.RECEIVE_USER,
  token,
  user
});

export const logout = (): types.Action => ({
  type: types.LOGOUT
});
