import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData, UserSchema } from "../types/UserSchema";

const initialState: UserSchema = {
    authUser: undefined
}

export const USER_DATA_KEY = 'user'

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<UserData>) {
            state.authUser = action.payload
        },
        initUserData(state) {
            if (localStorage[USER_DATA_KEY]) {
                state.authUser = JSON.parse(localStorage[USER_DATA_KEY])
            }
        },
        logout(state) {
            state.authUser = undefined
            localStorage[USER_DATA_KEY] = null
        }
    },
})

export const { reducer: userReducer } = userSlice;
export const { setUserData, initUserData, logout } = userSlice.actions