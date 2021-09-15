import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as RootStoreActions from './root-store.actions';
import { RootStoreEffects } from './root-store.effects';

describe('RootStoreEffects', () => {
  let actions: Observable<Action>;
  let effects: RootStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        RootStoreEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(RootStoreEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: RootStoreActions.init() });

      const expected = hot('-a-|', {
        a: RootStoreActions.loadRootStoreSuccess({ rootStore: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
