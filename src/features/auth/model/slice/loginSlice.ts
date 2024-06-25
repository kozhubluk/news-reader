import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authUserByUsername } from "features/auth/model/services/authUserByUsername";
import { LoginSchema } from "features/auth/model/types/LoginSchema";

const initialState: LoginSchema = {
    username: '',
    password: '',
    loading: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername(state, action: PayloadAction<string>) {
            state.username = action.payload
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authUserByUsername.pending, (state) => {
                if (state.loading) {
                    state.loading = true
                }
            })
            .addCase(authUserByUsername.fulfilled, (state) => {
                state.loading = false
            })
            .addCase(authUserByUsername.rejected, (state) => {
                state.loading = false
            })
    },
})

export const { reducer: loginReducer } = loginSlice
export const { setUsername, setPassword } = loginSlice.actions