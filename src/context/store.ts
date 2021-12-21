import { configureStore } from "@reduxjs/toolkit";
import task from "./task/taskSlice"

export const store = configureStore({
    reducer: {
        task
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch