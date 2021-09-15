import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as AuthStoreActions from './auth-store.actions';
import { AuthStoreEntity } from './auth-store.models';

export const AUTH_STORE_FEATURE_KEY = 'authStore';

export interface State extends EntityState<AuthStoreEntity> {
  selectedId?: string | number; // which AuthStore record has been selected
  loaded: boolean; // has the AuthStore list been loaded
  error?: string | null; // last known error (if any)
}

export interface AuthStorePartialState {
  readonly [AUTH_STORE_FEATURE_KEY]: State;
}

export const authStoreAdapter: EntityAdapter<AuthStoreEntity> =
  createEntityAdapter<AuthStoreEntity>();

export const initialState: State = authStoreAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const authStoreReducer = createReducer(
  initialState,
  on(AuthStoreActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(AuthStoreActions.loadAuthStoreSuccess, (state, { authStore }) =>
    authStoreAdapter.setAll(authStore, { ...state, loaded: true })
  ),
  on(AuthStoreActions.loadAuthStoreFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authStoreReducer(state, action);
}
