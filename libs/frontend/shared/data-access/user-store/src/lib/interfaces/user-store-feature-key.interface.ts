import {IUserState} from './user-state.interface'
import {USER_FEATURE_KEY} from '../+state/user-store.reducer'


export interface IUsersStoreFeatureKey {
  readonly [USER_FEATURE_KEY]: IUserState
}