import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArgs } from "app/providers/redux/config/StateSchema";
import { setProfileData } from "enities/profile/model/slice/profileSlice";
import { Profile } from "enities/profile/model/types/ProfileSchema";

export const updateProfileData = createAsyncThunk<Profile,
Profile,
{rejectValue: string, extra: ThunkExtraArgs}>(
    'profile/updateProfileData',
    async (body, thunkAPI) => {
        try {
            const response = await thunkAPI
                .extra.api.put<Profile>('profile')
            thunkAPI.dispatch(setProfileData(response.data))

            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('some error')
        }
    }
)