import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiRootModule } from '@taiga-ui/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { createApollo } from './utils/create-apollo';

@NgModule({
  imports: [CommonModule, TuiRootModule],
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
