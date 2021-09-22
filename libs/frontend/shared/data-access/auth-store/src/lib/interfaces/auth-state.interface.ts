import { ISignAuthPayload } from '@sc/shared/utils/interfaces';
import { ApolloError } from '@apollo/client';
export interface IAuthState {
  signOutError: ApolloError;
  signIn: ISignAuthPayload;
  signInError: ApolloError;
  signInRun: boolean;
  signOutRun: boolean;
}
