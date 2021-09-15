import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUserStore from './+state/user-store.reducer';
import { UserStoreEffects } from './+state/user-store.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromUserStore.USER_STORE_FEATURE_KEY,
      fromUserStore.reducer
    ),
    EffectsModule.forFeature([UserStoreEffects]),
  ],
})
export class UserStoreModule {}
