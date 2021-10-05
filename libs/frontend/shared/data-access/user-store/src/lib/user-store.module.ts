import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromUser from './+state/user-store.reducer';
import { UserEffects } from './+state/user-store.effects';
import { IUsersStoreOptions } from './interfaces/user-store-options.interface';
import { IUserApollo } from './interfaces/user-apollo.interface';
import { IUserFacade } from './interfaces/user-facade.interface';
import { BaseUserFacadeService } from './services/base-user-facade.service';
import { BaseUserApolloService } from './services/base-user-apollo.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UsersStoreModule {
  static forRoot(
    options: Partial<IUsersStoreOptions> = {}
  ): ModuleWithProviders<UsersStoreModule> {
    return {
      ngModule: UsersStoreModule,
      providers: [
        {
          provide: IUserApollo,
          useClass: options.apollo || BaseUserApolloService,
        },
        {
          provide: IUserFacade,
          useClass: options.facade || BaseUserFacadeService,
        },
      ],
    };
  }
}
