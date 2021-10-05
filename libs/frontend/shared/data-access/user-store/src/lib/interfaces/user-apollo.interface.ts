import {IUser, TApolloResponse} from '@sc/shared/utils/interfaces'

export abstract class IUserApollo {
  abstract loadUser(queryParams?: Record<string, unknown>): TApolloResponse<IUser>;
}