export interface ProfileSchema {
    profile: Profile
    loading: boolean
    error?: string
}

export type Gender = 'female' | 'male'

export interface Profile {
    username: string
    name: string
    surname: string
    gender?: Gender
    birthdate?: string
}