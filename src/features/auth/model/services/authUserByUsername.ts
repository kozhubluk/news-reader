import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserData } from "enities/user";
import { LoginData } from "features/auth/model/types/LoginSchema";
import { setUserData, USER_DATA_KEY } from "enities/user/model/slice/userSlice";
import { ThunkExtraArgs } from "app/providers/redux/config/StateSchema";

export const authUserByUsername = createAsyncThunk<UserData,
LoginData, {rejectValue: string, extra: ThunkExtraArgs}>(
    'login/authUserByUsername',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await thunkAPI
                .extra.api.post<UserData>('login', { username, password })

            thunkAPI.dispatch(setUserData(response.data))
            localStorage.setItem(USER_DATA_KEY, JSON.stringify(response.data))

            console.log(response.data)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('some error')
        }
    }
)