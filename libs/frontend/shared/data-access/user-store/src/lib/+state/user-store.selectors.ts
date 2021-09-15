import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  USER_STORE_FEATURE_KEY,
  State,
  userStoreAdapter,
} from './user-store.reducer';

// Lookup the 'UserStore' feature state managed by NgRx
export const getUserStoreState = createFeatureSelector<State>(
  USER_STORE_FEATURE_KEY
);

const { selectAll, selectEntities } = userStoreAdapter.getSelectors();

export const getUserStoreLoaded = createSelector(
  getUserStoreState,
  (state: State) => state.loaded
);

export const getUserStoreError = createSelector(
  getUserStoreState,
  (state: State) => state.error
);

export const getAllUserStore = createSelector(
  getUserStoreState,
  (state: State) => selectAll(state)
);

export const getUserStoreEntities = createSelector(
  getUserStoreState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getUserStoreState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getUserStoreEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
