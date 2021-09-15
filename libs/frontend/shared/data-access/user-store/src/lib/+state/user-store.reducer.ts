import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as UserStoreActions from './user-store.actions';
import { UserStoreEntity } from './user-store.models';

export const USER_STORE_FEATURE_KEY = 'userStore';

export interface State extends EntityState<UserStoreEntity> {
  selectedId?: string | number; // which UserStore record has been selected
  loaded: boolean; // has the UserStore list been loaded
  error?: string | null; // last known error (if any)
}

export interface UserStorePartialState {
  readonly [USER_STORE_FEATURE_KEY]: State;
}

export const userStoreAdapter: EntityAdapter<UserStoreEntity> =
  createEntityAdapter<UserStoreEntity>();

export const initialState: State = userStoreAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const userStoreReducer = createReducer(
  initialState,
  on(UserStoreActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UserStoreActions.loadUserStoreSuccess, (state, { userStore }) =>
    userStoreAdapter.setAll(userStore, { ...state, loaded: true })
  ),
  on(UserStoreActions.loadUserStoreFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return userStoreReducer(state, action);
}
