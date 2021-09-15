import { ISignAuthPayload, ISignAuthResponse, TApolloResponse } from "@sc/shared/utils/interfaces";

export abstract class IAuthApollo {
    abstract signIn(payload: ISignAuthPayload, queryParams?: Record<string, unknown>): TApolloResponse<ISignAuthResponse>
    abstract signOut(queryParams: Record<string, unknown>): TApolloResponse<void>
}