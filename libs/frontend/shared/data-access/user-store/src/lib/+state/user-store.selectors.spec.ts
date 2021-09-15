import { UserStoreEntity } from './user-store.models';
import {
  userStoreAdapter,
  UserStorePartialState,
  initialState,
} from './user-store.reducer';
import * as UserStoreSelectors from './user-store.selectors';

describe('UserStore Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUserStoreId = (it: UserStoreEntity) => it.id;
  const createUserStoreEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UserStoreEntity);

  let state: UserStorePartialState;

  beforeEach(() => {
    state = {
      userStore: userStoreAdapter.setAll(
        [
          createUserStoreEntity('PRODUCT-AAA'),
          createUserStoreEntity('PRODUCT-BBB'),
          createUserStoreEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('UserStore Selectors', () => {
    it('getAllUserStore() should return the list of UserStore', () => {
      const results = UserStoreSelectors.getAllUserStore(state);
      const selId = getUserStoreId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = UserStoreSelectors.getSelected(state) as UserStoreEntity;
      const selId = getUserStoreId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUserStoreLoaded() should return the current "loaded" status', () => {
      const result = UserStoreSelectors.getUserStoreLoaded(state);

      expect(result).toBe(true);
    });

    it('getUserStoreError() should return the current "error" state', () => {
      const result = UserStoreSelectors.getUserStoreError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
