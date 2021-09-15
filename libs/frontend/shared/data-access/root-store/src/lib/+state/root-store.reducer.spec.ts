import { Action } from '@ngrx/store';

import * as RootStoreActions from './root-store.actions';
import { RootStoreEntity } from './root-store.models';
import { State, initialState, reducer } from './root-store.reducer';

describe('RootStore Reducer', () => {
  const createRootStoreEntity = (id: string, name = ''): RootStoreEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid RootStore actions', () => {
    it('loadRootStoreSuccess should return the list of known RootStore', () => {
      const rootStore = [
        createRootStoreEntity('PRODUCT-AAA'),
        createRootStoreEntity('PRODUCT-zzz'),
      ];
      const action = RootStoreActions.loadRootStoreSuccess({ rootStore });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
