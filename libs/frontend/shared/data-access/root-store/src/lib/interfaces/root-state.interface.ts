import { RouterReducerState } from '@ngrx/router-store';
import { IRouterUrlState } from './router-url-state.interface';

export interface IRootState {
    router: RouterReducerState<IRouterUrlState> | null;
}
