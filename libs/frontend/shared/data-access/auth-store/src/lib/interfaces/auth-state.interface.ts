import {ISignAuthPayload} from '@sc/shared/utils/interfaces'
import { ApolloError } from '@apollo/client';
export interface IAuthState {
    signIn: ISignAuthPayload
    signInError: ApolloError
    signInRun: boolean
    signOurRun: boolean
}