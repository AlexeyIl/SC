import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as AuthStoreActions from './auth-store.actions';
import * as AuthStoreFeature from './auth-store.reducer';

@Injectable()
export class AuthStoreEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthStoreActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return AuthStoreActions.loadAuthStoreSuccess({ authStore: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return AuthStoreActions.loadAuthStoreFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
