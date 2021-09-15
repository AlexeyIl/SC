import { AuthStoreEntity } from './auth-store.models';
import {
  authStoreAdapter,
  AuthStorePartialState,
  initialState,
} from './auth-store.reducer';
import * as AuthStoreSelectors from './auth-store.selectors';

describe('AuthStore Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAuthStoreId = (it: AuthStoreEntity) => it.id;
  const createAuthStoreEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as AuthStoreEntity);

  let state: AuthStorePartialState;

  beforeEach(() => {
    state = {
      authStore: authStoreAdapter.setAll(
        [
          createAuthStoreEntity('PRODUCT-AAA'),
          createAuthStoreEntity('PRODUCT-BBB'),
          createAuthStoreEntity('PRODUCT-CCC'),
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

  describe('AuthStore Selectors', () => {
    it('getAllAuthStore() should return the list of AuthStore', () => {
      const results = AuthStoreSelectors.getAllAuthStore(state);
      const selId = getAuthStoreId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = AuthStoreSelectors.getSelected(state) as AuthStoreEntity;
      const selId = getAuthStoreId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getAuthStoreLoaded() should return the current "loaded" status', () => {
      const result = AuthStoreSelectors.getAuthStoreLoaded(state);

      expect(result).toBe(true);
    });

    it('getAuthStoreError() should return the current "error" state', () => {
      const result = AuthStoreSelectors.getAuthStoreError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
