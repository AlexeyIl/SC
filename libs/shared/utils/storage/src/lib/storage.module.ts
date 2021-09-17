import { ModuleWithProviders, NgModule } from '@angular/core';
import { IStorageOptions, ICookieService, ILocalStorage, ISessionStorage, ICookieStorage } from '@sc/shared/utils/interfaces';
import { BaseCookieService } from './services/base-cookie.service';
import { BaseCookieStorage } from './storage/base-cookie.storage';
import { BaseLocalStorage } from './storage/base-local.storage';
import { BaseSessionStorage } from './storage/base-session.storage';

@NgModule()
export class StorageModule {
    static forRoot(option: Partial<IStorageOptions> = {}): ModuleWithProviders<StorageModule> {
        return {
            ngModule: StorageModule,
            providers: [
                {
                    provide: ICookieService,
                    useClass: option.cookieService || BaseCookieService,
                  },
                  {
                    provide: ICookieStorage,
                    useClass: option.cookieStorage || BaseCookieStorage,
                  },
                  {
                    provide: ISessionStorage,
                    useClass: option.sessionStorage || BaseSessionStorage,
                  },
                  {
                    provide: ILocalStorage,
                    useClass: option.localStorage || BaseLocalStorage,
                  },
            ]
        }
    }
}
