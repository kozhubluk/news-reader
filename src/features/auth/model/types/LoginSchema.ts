export interface LoginData {
    username: string
    password: string
}

export interface LoginSchema extends LoginData{
    loading: boolean
    error?: string
}