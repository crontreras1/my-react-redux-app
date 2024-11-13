import { configureStore } from "@reduxjs/toolkit";
import todoReaducer from "../features/todos/todoReducer";

export const store = configureStore({
    reducer: {
        todos: todoReaducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch