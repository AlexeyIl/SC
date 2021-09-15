import { Action } from '@ngrx/store';

import * as AuthStoreActions from './auth-store.actions';
import { AuthStoreEntity } from './auth-store.models';
import { State, initialState, reducer } from './auth-store.reducer';

describe('AuthStore Reducer', () => {
  const createAuthStoreEntity = (id: string, name = ''): AuthStoreEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid AuthStore actions', () => {
    it('loadAuthStoreSuccess should return the list of known AuthStore', () => {
      const authStore = [
        createAuthStoreEntity('PRODUCT-AAA'),
        createAuthStoreEntity('PRODUCT-zzz'),
      ];
      const action = AuthStoreActions.loadAuthStoreSuccess({ authStore });

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
