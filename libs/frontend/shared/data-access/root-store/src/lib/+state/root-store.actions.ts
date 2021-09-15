import { createAction, props } from '@ngrx/store';
import { RootStoreEntity } from './root-store.models';

export const init = createAction('[RootStore Page] Init');

export const loadRootStoreSuccess = createAction(
  '[RootStore/API] Load RootStore Success',
  props<{ rootStore: RootStoreEntity[] }>()
);

export const loadRootStoreFailure = createAction(
  '[RootStore/API] Load RootStore Failure',
  props<{ error: any }>()
);
