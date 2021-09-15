import { RootStoreEntity } from './root-store.models';
import {
  rootStoreAdapter,
  RootStorePartialState,
  initialState,
} from './root-store.reducer';
import * as RootStoreSelectors from './root-store.selectors';

describe('RootStore Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getRootStoreId = (it: RootStoreEntity) => it.id;
  const createRootStoreEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as RootStoreEntity);

  let state: RootStorePartialState;

  beforeEach(() => {
    state = {
      rootStore: rootStoreAdapter.setAll(
        [
          createRootStoreEntity('PRODUCT-AAA'),
          createRootStoreEntity('PRODUCT-BBB'),
          createRootStoreEntity('PRODUCT-CCC'),
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

  describe('RootStore Selectors', () => {
    it('getAllRootStore() should return the list of RootStore', () => {
      const results = RootStoreSelectors.getAllRootStore(state);
      const selId = getRootStoreId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = RootStoreSelectors.getSelected(state) as RootStoreEntity;
      const selId = getRootStoreId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getRootStoreLoaded() should return the current "loaded" status', () => {
      const result = RootStoreSelectors.getRootStoreLoaded(state);

      expect(result).toBe(true);
    });

    it('getRootStoreError() should return the current "error" state', () => {
      const result = RootStoreSelectors.getRootStoreError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
