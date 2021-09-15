import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ROOT_STORE_FEATURE_KEY,
  State,
  rootStoreAdapter,
} from './root-store.reducer';

// Lookup the 'RootStore' feature state managed by NgRx
export const getRootStoreState = createFeatureSelector<State>(
  ROOT_STORE_FEATURE_KEY
);

const { selectAll, selectEntities } = rootStoreAdapter.getSelectors();

export const getRootStoreLoaded = createSelector(
  getRootStoreState,
  (state: State) => state.loaded
);

export const getRootStoreError = createSelector(
  getRootStoreState,
  (state: State) => state.error
);

export const getAllRootStore = createSelector(
  getRootStoreState,
  (state: State) => selectAll(state)
);

export const getRootStoreEntities = createSelector(
  getRootStoreState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getRootStoreState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getRootStoreEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
