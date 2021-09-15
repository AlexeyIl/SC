import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { AUTH_STORE_FEATURE_KEY } from './auth-store.reducer';
import { IAuthState } from '../interfaces/auth-state.interface';


// Lookup the 'AuthStore' feature state managed by NgRx

export const getAuthState = createFeatureSelector<IAuthState>(AUTH_STORE_FEATURE_KEY);
