import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuthStore from './+state/auth-store.reducer';
import { AuthStoreEffects } from './+state/auth-store.effects';

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
export class AuthStoreModule {}
