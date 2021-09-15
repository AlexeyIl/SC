import { createAction, props } from '@ngrx/store';
import { UserStoreEntity } from './user-store.models';

export const init = createAction('[UserStore Page] Init');

export const loadUserStoreSuccess = createAction(
  '[UserStore/API] Load UserStore Success',
  props<{ userStore: UserStoreEntity[] }>()
);

export const loadUserStoreFailure = createAction(
  '[UserStore/API] Load UserStore Failure',
  props<{ error: any }>()
);
