import { AUTH_STORE_FEATURE_KEY } from '../+state/auth-store.reducer';
import { IAuthState } from './auth-state.interface';
export interface IAuthStoreFeatureKey {
    readonly [AUTH_STORE_FEATURE_KEY]: IAuthState
}