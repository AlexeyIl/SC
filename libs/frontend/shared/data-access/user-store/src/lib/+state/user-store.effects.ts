import { Injectable } from '@angular/core';
import { DataPersistence } from '@nrwl/angular';
import { Action } from '@ngrx/store';
import { createEffect } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import {
  IActionEffectPayload,
  IActionForcePayload,
  IUser,
} from '@sc/shared/utils/interfaces';
import { AbstractEffects } from '@sc/shared/utils/store';

import { IUserApollo } from '../interfaces/user-apollo.interface';
import { USER_FEATURE_KEY } from './user-store.reducer';
import * as UserActions from './user-store.actions';
import { IUsersStoreFeatureKey } from '../interfaces/user-store-feature-key.interface';
import { IUserState } from '../interfaces/user-state.interface';

@Injectable()
export class UserEffects extends AbstractEffects<IUserState> {
  loadUser$ = createEffect(() =>
    this.dataPersistence.fetch<IActionEffectPayload<IActionForcePayload>>(
      UserActions.loadUser,
      {
        run: (action, store) =>
          !this.getState(store).userLoadRun || action.payload.force
            ? UserActions.loadUserRun()
            : UserActions.loadUserCancel(),
        onError: (action, error) => this.errorHandler(action, error),
      }
    )
  );

  loadUserRun$ = createEffect(() =>
    this.dataPersistence.fetch(UserActions.loadUserRun, {
      run: (action) =>
        this.userApollo
          .loadUser()
          .pipe(
            map<IUser, Action>((payload) =>
              UserActions.loadUserSuccess({ payload })
            )
          ),
      onError: (action, error) =>
        this.errorHandler(action, error, UserActions.loadUserFailure),
    })
  );

  constructor(
    private dataPersistence: DataPersistence<IUsersStoreFeatureKey>,
    private userApollo: IUserApollo,
  ) {
    super(USER_FEATURE_KEY);
  }
}
