import { ICookieServiceOption } from "./cookie-service-option.interface";

export abstract class ICookieService {
    abstract check(name: string): boolean
    abstract get(name: string): string | null
    abstract getAll(): { [key: string]: string}
    abstract put(
        name: string,
        value: string,
        options: Partial<ICookieServiceOption>
    ): void
    abstract removeAll(
        path?: string,
        domain?: string
    ): void
}