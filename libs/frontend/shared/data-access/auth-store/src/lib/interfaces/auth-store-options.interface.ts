import { IAuthFacade } from './auth-facade.interface';
import { Type } from '@angular/core';
import { IAuthApollo } from './auth-apollo.interface';
import { IAuthStorage } from './auth-storage.interface';

export interface IAuthStoreOptions {
  facade: Type<IAuthFacade>;
  apollo: Type<IAuthApollo>;
  storage: Type<IAuthStorage>;
}
