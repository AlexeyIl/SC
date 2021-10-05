import { Type } from '@angular/core';
import { IUserApollo } from './user-apollo.interface';
import { IUserFacade } from './user-facade.interface';

export interface IUsersStoreOptions {
  apollo: Type<IUserApollo>;
  facade: Type<IUserFacade>;
}
