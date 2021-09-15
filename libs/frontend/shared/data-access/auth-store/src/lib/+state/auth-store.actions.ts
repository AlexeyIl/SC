import { createAction, props } from '@ngrx/store';
import { AuthStoreEntity } from './auth-store.models';

export const init = createAction('[AuthStore Page] Init');

export const loadAuthStoreSuccess = createAction(
  '[AuthStore/API] Load AuthStore Success',
  props<{ authStore: AuthStoreEntity[] }>()
);

export const loadAuthStoreFailure = createAction(
  '[AuthStore/API] Load AuthStore Failure',
  props<{ error: any }>()
);
