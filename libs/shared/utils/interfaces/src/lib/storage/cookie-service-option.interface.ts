export interface ICookiesServiceOption {
    expires: Date
    domain: string
    path: string
    secure: boolean
    sameSite: 'strict' | 'lax' | 'none'
}