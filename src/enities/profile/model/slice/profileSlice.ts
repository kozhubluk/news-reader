import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "enities/profile/model/types/ProfileSchema";
import { fetchProfileData } from "enities/profile/model/services/fetchProfileData";
import { updateProfileData } from "enities/profile/model/services/updateProfileData";

const initialState: ProfileSchema = {
    profile: {
        username: '',
        name: '',
        surname: '',
        gender: 'male',
    },
    loading: {
        fetch: false,
        update: false
    },
    error: {}
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData(state, action: PayloadAction<Profile>) {
            state.profile = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.loading.fetch = true
            })
            .addCase(fetchProfileData.fulfilled, (state) => {
                state.loading.fetch = false
                state.error.fetch = undefined
            })
            .addCase(fetchProfileData.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading.fetch = false
                state.error.fetch = action.payload
            })

            .addCase(updateProfileData.pending, (state) => {
                state.loading.update = true
            })
            .addCase(updateProfileData.fulfilled, (state) => {
                state.loading.update = false
                state.error.update = undefined
            })
            .addCase(updateProfileData.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading.update = false
                state.error.update = action.payload
            })
    }
})

export const { reducer: profileReducer } = profileSlice;
export const { setProfileData } = profileSlice.actions