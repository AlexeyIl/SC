import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as UserStoreActions from './user-store.actions';
import { UserStoreEffects } from './user-store.effects';

describe('UserStoreEffects', () => {
  let actions: Observable<Action>;
  let effects: UserStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        UserStoreEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(UserStoreEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: UserStoreActions.init() });

      const expected = hot('-a-|', {
        a: UserStoreActions.loadUserStoreSuccess({ userStore: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
