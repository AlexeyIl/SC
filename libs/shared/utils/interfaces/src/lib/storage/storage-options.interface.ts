import { ICookieService } from "./cookie-service.interface";
import { Type } from '@angular/core';
import { ICookieStorage } from "./cookie-storage.interface";
import { ILocalStorage } from "./local-storage.interface";
import { ISessionStorage } from "./session-storage.interface";

export interface IStorageOptions {
    cookieService: Type<ICookieService>
    cookieStorage: Type<ICookieStorage>
    localStorage: Type<ILocalStorage>
    sessionStorage: Type<ISessionStorage>
}