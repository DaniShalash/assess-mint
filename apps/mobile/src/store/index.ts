import { Store } from './store';
import { useDispatch, useSelector } from './hooks';
import { AuthActions } from './auth.state';
import { UserActions } from './user.state';
import type {
  GlobalState,
  AuthState,
  UserState
} from './state.model';

export {
  Store,
  useDispatch,
  useSelector,
  AuthActions,
  UserActions
};
// ----------------------

export type {
  GlobalState,
  AuthState,
  UserState
};
// -----------------------------------------------------------------------
