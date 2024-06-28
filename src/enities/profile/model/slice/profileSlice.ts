import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userSlice } from "enities/user/model/slice/userSlice";
import { ProfileSchema } from "enities/profile/model/types/ProfileSchema";

const initialState: ProfileSchema = {
    username: '',
    name: '',
    surname: ''
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData(state, action: PayloadAction<string>) {
            state.username = action.payload
        }

    },
})

export const { reducer: profileReducer } = profileSlice;
export const { setProfileData } = profileSlice.actions