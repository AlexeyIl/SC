import { IUser } from '@sc/shared/utils/interfaces';
import { ApolloError } from '@apollo/client';

export interface IUserState {
  user: IUser | null;
  userLoadRun: boolean;
  userLoadFailure: ApolloError | null;
}
