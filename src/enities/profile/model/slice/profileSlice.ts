import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "enities/profile/model/types/ProfileSchema";
import { fetchProfileData } from "enities/profile/model/services/fetchProfileData";

const initialState: ProfileSchema = {
    profile: {
        username: '',
        name: '',
        surname: '',
        gender: 'male',
    },
    loading: false
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
                state.loading = true
            })
            .addCase(fetchProfileData.fulfilled, (state) => {
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchProfileData.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const { reducer: profileReducer } = profileSlice;
export const { setProfileData } = profileSlice.actions