import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArgs } from "app/providers/redux/config/StateSchema";
import { setProfileData } from "enities/profile/model/slice/profileSlice";
import { Profile } from "enities/profile/model/types/ProfileSchema";

export const fetchProfileData = createAsyncThunk<Profile,
void,
{rejectValue: string, extra: ThunkExtraArgs}>(
    'profile/fetchProfileData',
    async (body, thunkAPI) => {
        try {
            const response = await thunkAPI
                .extra.api.get('profile')
            thunkAPI.dispatch(setProfileData(response.data))

            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('some error')
        }
    }
)