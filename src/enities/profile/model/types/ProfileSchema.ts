interface ProfileLoading {
    fetch: boolean
    update: boolean
}

interface ProfileError {
    fetch: string
    update: string
}

export interface ProfileSchema {
    profile: Profile
    loading: ProfileLoading
    error: Partial<ProfileError>
}

export type Gender = 'female' | 'male'

export interface Profile {
    username: string
    name: string
    surname: string
    gender?: Gender
    birthdate?: string
}