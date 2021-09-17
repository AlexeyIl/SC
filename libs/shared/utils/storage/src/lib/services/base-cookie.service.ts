import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import {
  ICookieService,
  ICookieServiceOption,
} from '@sc/shared/utils/interfaces';

@Injectable()
export class BaseCookieService implements ICookieService {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  
  getCookieString(): string {
    return this.document.cookie;
  }

  check(name: string): boolean {
    name = encodeURIComponent(name);
    const regExp: RegExp = this.getCookieRegExp(name);

    return regExp.test(this.getCookieString());
  }

  get(name: string): string | null {
    if (this.check(name)) {
      name = encodeURIComponent(name);
      const regExp: RegExp = this.getCookieRegExp(name);
      const result: RegExpExecArray | null = regExp.exec(
        this.getCookieString()
      );
      return Array.isArray(result)
        ? this.safeDecodeURIComponent(result[1])
        : null;
    }
    return null;
  }

  getAll(): { [p: string]: string } {
    const cookies: { [key: string]: string } = {};
    if (this.getCookieString() && this.getCookieString() !== '') {
      this.getCookieString()
        .split(';')
        .forEach((currentCookie) => {
          const [cookieName, cookieValue] = currentCookie.split('=');
          cookies[this.safeDecodeURIComponent(cookieName.replace(/^ /, ''))] =
            this.safeDecodeURIComponent(cookieValue);
        });
    }
    return cookies;
  }

  put(
    name: string,
    value: string,
    options: Partial<ICookieServiceOption> = { sameSite: 'none', secure: true }
  ): void {
    let cookieString: string =
      encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
    if (options.expires) {
      cookieString += 'expires=' + options.expires.toUTCString() + ';';
    }

    if (options.path) {
      cookieString += 'path=' + options.path + ';';
    }

    if (options.domain) {
      cookieString += 'domain=' + options.domain + ';';
    }

    if (options.secure === false && options.sameSite === 'none') {
      options.secure = true;
      console.warn(
        `[ngx-cookie-service] Cookie ${name} was forced with secure flag because sameSite=None.` +
          `More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`
      );
    }

    if (options.secure) {
      cookieString += 'secure;';
    }

    if (options.sameSite) {
      cookieString += 'sameSite=' + options.sameSite + ';';
    }
    this.document.cookie = cookieString;
  }

  remove(name: string, path?: string, domain?: string): void {
    this.put(name, '', {
      path,
      domain,
      expires: new Date('Thu, 01 Jan 1970 00:00:01 GMT'),
    });
  }

  removeAll(path?: string, domain?: string): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cookies: any = this.getAll();
    for (const cookieName of Object.keys(cookies)) {
      this.remove(cookieName, path, domain);
    }
  }

  /**
   * @param name Cookie name
   * @returns property RegExp
   */
  protected getCookieRegExp(name: string): RegExp {
    // eslint-disable-next-line no-useless-escape
    const escapedName: string = name.replace(
      /([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi,
      '\\$1'
    );

    return new RegExp(
      '(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)',
      'g'
    );
  }

  protected safeDecodeURIComponent(encodedURIComponent: string): string {
    try {
      return decodeURIComponent(encodedURIComponent);
    } catch {
      // probably it is not uri encoded. return as is
      return encodedURIComponent;
    }
  }
}
