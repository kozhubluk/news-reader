import { createSlice } from "@reduxjs/toolkit";

export interface CounterSchema {
    value: number
}

const initialState: CounterSchema = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    },
})

export const { reducer: counterReducer } = counterSlice;
export const { increment, decrement } = counterSlice.actions