import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromRootStore from './+state/root-store.reducer';
import { RootStoreEffects } from './+state/root-store.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromRootStore.ROOT_STORE_FEATURE_KEY,
      fromRootStore.reducer
    ),
    EffectsModule.forFeature([RootStoreEffects]),
  ],
})
export class RootStoreModule {}
