import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as AuthStoreActions from './auth-store.actions';
import { AuthStoreEffects } from './auth-store.effects';

describe('AuthStoreEffects', () => {
  let actions: Observable<Action>;
  let effects: AuthStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AuthStoreEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(AuthStoreEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AuthStoreActions.init() });

      const expected = hot('-a-|', {
        a: AuthStoreActions.loadAuthStoreSuccess({ authStore: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
