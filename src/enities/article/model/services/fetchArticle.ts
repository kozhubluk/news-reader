import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "enities/article/model/types/ArticleSchems";
import { ThunkExtraArgs } from "app/providers/redux/config/StateSchema";
import { setArticleData } from "enities/article/model/slice/ArticleSlice";

export const fetchArticle = createAsyncThunk<Article,
string,
{rejectValue: string, extra: ThunkExtraArgs}>(
    'article/fetchArticle',
    async (id, thunkAPI) => {
        try {
            const response = await thunkAPI
                .extra.api.get(`article/${id}`)
            thunkAPI.dispatch(setArticleData(response.data))

            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('some error')
        }
    }
)