import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArgs } from "app/providers/redux/config/StateSchema";
import { ProfileSchema } from "enities/profile";
import { setProfileData } from "enities/profile/model/slice/profileSlice";

export const fetchProfileData = createAsyncThunk<ProfileSchema,
void,
{rejectValue: string, extra: ThunkExtraArgs}>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI
                .extra.api.get<ProfileSchema>('profile')
            thunkAPI.dispatch(setProfileData(response.data.username))

            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('some error')
        }
    }
)