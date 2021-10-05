import { createAction } from '@ngrx/store';
import { ApolloError } from '@apollo/client';

import { payload, payloadForce } from '@sc/shared/utils/store';
import { IUser } from '@sc/shared/utils/interfaces';

export const loadUser = createAction('[User] Load User', payloadForce());
export const loadUserCancel = createAction('[User] Load User Cancel');
export const loadUserRun = createAction('[User] Load User Run');
export const loadUserSuccess = createAction(
  '[User] Load User Success',
  payload<IUser>()
);
export const loadUserFailure = createAction(
  '[User] Load User Failure',
  payload<ApolloError>()
);
