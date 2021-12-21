import { createSlice } from "@reduxjs/toolkit";
import { taskState } from "./initialState";

export const taskSlice = createSlice({
    name: "task",
    initialState: taskState,
    reducers: {
        taskReducer: (state, action) => {
            state.tasks = action.payload
        }
    }
})

export const { taskReducer } = taskSlice.actions

export default taskSlice.reducer