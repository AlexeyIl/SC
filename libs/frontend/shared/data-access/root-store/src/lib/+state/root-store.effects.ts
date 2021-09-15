import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as RootStoreActions from './root-store.actions';
import * as RootStoreFeature from './root-store.reducer';

@Injectable()
export class RootStoreEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RootStoreActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return RootStoreActions.loadRootStoreSuccess({ rootStore: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return RootStoreActions.loadRootStoreFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
