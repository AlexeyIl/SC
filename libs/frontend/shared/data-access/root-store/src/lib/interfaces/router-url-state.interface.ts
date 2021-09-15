import { Params } from "@angular/router";

export interface IRouterUrlState {
    url: string;
    params: Params;
    queryParams: Params;
}