import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as RootStoreActions from './root-store.actions';
import { RootStoreEntity } from './root-store.models';

export const ROOT_STORE_FEATURE_KEY = 'rootStore';

export interface State extends EntityState<RootStoreEntity> {
  selectedId?: string | number; // which RootStore record has been selected
  loaded: boolean; // has the RootStore list been loaded
  error?: string | null; // last known error (if any)
}

export interface RootStorePartialState {
  readonly [ROOT_STORE_FEATURE_KEY]: State;
}

export const rootStoreAdapter: EntityAdapter<RootStoreEntity> =
  createEntityAdapter<RootStoreEntity>();

export const initialState: State = rootStoreAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const rootStoreReducer = createReducer(
  initialState,
  on(RootStoreActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(RootStoreActions.loadRootStoreSuccess, (state, { rootStore }) =>
    rootStoreAdapter.setAll(rootStore, { ...state, loaded: true })
  ),
  on(RootStoreActions.loadRootStoreFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return rootStoreReducer(state, action);
}
