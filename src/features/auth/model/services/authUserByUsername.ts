import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserData } from "enities/user";
import { LoginData } from "features/auth/model/types/LoginSchema";
import { setUserData, USER_DATA_KEY } from "enities/user/model/slice/userSlice";

export const authUserByUsername = createAsyncThunk<UserData, LoginData, {rejectValue: string}>(
    'login/authUserByUsername',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await axios
                .post<UserData>('http://localhost:8000/login', { username, password })

            console.log(response.data)

            thunkAPI.dispatch(setUserData(response.data))
            localStorage.setItem(USER_DATA_KEY, JSON.stringify(response.data))

            return response.data
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('some error')
        }
    }
)