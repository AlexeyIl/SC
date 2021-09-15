import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as UserStoreActions from './user-store.actions';
import * as UserStoreFeature from './user-store.reducer';

@Injectable()
export class UserStoreEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserStoreActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return UserStoreActions.loadUserStoreSuccess({ userStore: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return UserStoreActions.loadUserStoreFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
