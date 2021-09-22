import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuthStore from './+state/auth-store.reducer';
import { AuthStoreEffects } from './+state/auth-store.effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { IAuthFacade } from './interfaces/auth-facade.interface';
import { BaseAuthFacade } from './services/base-auth.facade';
import { BaseAuthStorage } from './services/base-auth-storage.service';
import { IAuthStorage } from './interfaces/auth-storage.interface';
import { IAuthApollo } from './interfaces/auth-apollo.interface';
import { BaseAuthApollo } from './services/base-auth-apollo.service';
import { IAuthStoreOptions } from './interfaces/auth-store-options.interface';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromAuthStore.AUTH_STORE_FEATURE_KEY,
      fromAuthStore.reducer
    ),
    EffectsModule.forFeature([AuthStoreEffects]),
  ],
})
export class AuthStoreModule {
  static forRoot(
    options: Partial<IAuthStoreOptions> = {}
  ): ModuleWithProviders<AuthStoreModule> {
    return {
      ngModule: AuthStoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
        {
          provide: IAuthFacade,
          useClass: options.facade || BaseAuthFacade,
        },
        {
          provide: IAuthStorage,
          useClass: options.storage || BaseAuthStorage,
        },
        {
          provide: IAuthApollo,
          useClass: options.apollo || BaseAuthApollo,
        },
      ],
    };
  }
}
