import { Action } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import { md5 } from '../utils/md5.util';

export abstract class AbstractEffects<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getState<S = T>(state: any, key?: string): S {
    return state[key || this.key];
  }

  getEffectIdFromPayload(payload: any): string {
    return md5(JSON.stringify(payload));
  }

  errorHandler(
    action: Action,
    error: Record<string, unknown> = {},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    responseAction?: (payload?: any) => TypedAction<any>,
    debug = false
  ): Action | never {
    if (debug) {
      console.error(error);
    }

    if (responseAction()) {
      return responseAction({ payload: error });
    }
  }

  protected constructor(protected readonly key: string) {}
}
