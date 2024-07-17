import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article, ArticleSchema } from "../types/ArticleSchems";
import { fetchArticle } from "enities/article/model/services/fetchArticle";

const initialState: ArticleSchema = {
    article: undefined,
    isLoading: false
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        setArticleData(state, action: PayloadAction<Article>) {
            state.article = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticle.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchArticle.fulfilled, (state) => {
                state.isLoading = false
                state.error = undefined
            })
            .addCase(fetchArticle.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: articleReducer } = articleSlice;
export const { setArticleData } = articleSlice.actions