import { ICookiesServiceOption } from "./cookie-service-option.interface";

export abstract class ICookieService {
    abstract check(name: string): boolean
    abstract get(name: string): string
    abstract getAll(): { [key: string]: string}
    abstract put(
        name: string,
        value: string,
        options: Partial<ICookiesServiceOption>
    ): void
    abstract remover(
        name: string,
        path?: string,
        domain?: string
    ): void
    abstract removeAll(
        path?: string,
        domain?: string
    ): void
}