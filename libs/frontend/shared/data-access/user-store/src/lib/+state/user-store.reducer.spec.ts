import { Action } from '@ngrx/store';

import * as UserStoreActions from './user-store.actions';
import { UserStoreEntity } from './user-store.models';
import { State, initialState, reducer } from './user-store.reducer';

describe('UserStore Reducer', () => {
  const createUserStoreEntity = (id: string, name = ''): UserStoreEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid UserStore actions', () => {
    it('loadUserStoreSuccess should return the list of known UserStore', () => {
      const userStore = [
        createUserStoreEntity('PRODUCT-AAA'),
        createUserStoreEntity('PRODUCT-zzz'),
      ];
      const action = UserStoreActions.loadUserStoreSuccess({ userStore });

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
