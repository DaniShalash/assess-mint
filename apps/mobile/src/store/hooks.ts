import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from 'react-redux';

import { GlobalState } from './state.model';

import { Store } from './store';

type StoreDispatch = typeof Store.dispatch;
// ----------------------

export const useDispatch: () => StoreDispatch = useReduxDispatch;
// ----------------------

export const useSelector: TypedUseSelectorHook<GlobalState> = useReduxSelector;
// ---------------------------------------------------------------------
