import { Observable } from 'rxjs';
import { IUser } from '@sc/shared/utils/interfaces';
import { ApolloError } from '@apollo/client';

export abstract class IUserFacade {
  user$: Observable<IUser>;
  userLoadRun$: Observable<boolean>;
  userLoadFailure$: Observable<ApolloError>;
  abstract loadUser(force?: boolean): void;
}
