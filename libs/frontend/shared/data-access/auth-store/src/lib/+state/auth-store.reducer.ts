import {Action, createReducer, on} from '@ngrx/store'

import * as AuthActions from './auth-store.actions'
import {authInitialState} from './auth-initial-state'
import {IAuthState} from '../interfaces/auth-state.interface'

export const AUTH_STORE_FEATURE_KEY = 'auth'

const authReducer = createReducer(
  authInitialState,
)

export function reducer(state: IAuthState | undefined, action: Action) {
  return authReducer(state, action)
}