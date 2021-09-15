import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  AUTH_STORE_FEATURE_KEY,
  State,
  authStoreAdapter,
} from './auth-store.reducer';

// Lookup the 'AuthStore' feature state managed by NgRx
export const getAuthStoreState = createFeatureSelector<State>(
  AUTH_STORE_FEATURE_KEY
);

const { selectAll, selectEntities } = authStoreAdapter.getSelectors();

export const getAuthStoreLoaded = createSelector(
  getAuthStoreState,
  (state: State) => state.loaded
);

export const getAuthStoreError = createSelector(
  getAuthStoreState,
  (state: State) => state.error
);

export const getAllAuthStore = createSelector(
  getAuthStoreState,
  (state: State) => selectAll(state)
);

export const getAuthStoreEntities = createSelector(
  getAuthStoreState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getAuthStoreState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getAuthStoreEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
