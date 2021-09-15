import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    !environment.production
      ? StoreDevtoolsModule.instrument({ logOnly: environment.production })
      : [],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
