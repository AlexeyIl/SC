import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiRootModule } from '@taiga-ui/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { createApollo } from './utils/create-apollo';
import { RootStoreModule } from '@sc/frontend-shared-data-access-root-store';
import { RouterModule } from '@angular/router';
import { StorageModule } from '@sc/shared/utils/storage';

@NgModule({
  imports: [CommonModule, TuiRootModule, RootStoreModule, StorageModule.forRoot(), RouterModule.forRoot([], {initialNavigation: 'enabled'})],
  declarations: [],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class CoreModule {}
