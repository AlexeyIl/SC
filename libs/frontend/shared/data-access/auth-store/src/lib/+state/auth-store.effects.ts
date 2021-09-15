import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as AuthStoreActions from './auth-store.actions';
import * as AuthStoreFeature from './auth-store.reducer';

@Injectable()
export class AuthStoreEffects {


  constructor(private readonly actions$: Actions) {}
}
