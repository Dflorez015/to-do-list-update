import { AppDispatch, RootState } from "../store";
import { ITask } from "./interface";
import { taskReducer } from "./taskSlice";

/**
 * Guarda las tareas
 * @param data - datos de la tarea
 * @returns 
 */
export const addTask = (data: ITask) => (dispatch: AppDispatch) => (getState: () => RootState) => {
    let { tasks } = getState().task
    tasks.push(data)
    dispatch(taskReducer(tasks))
}

/**
 * Edita una tarea seleccionada
 * @param data - datos actualizados
 * @param id - id de la tarea seleccionada
 * @returns 
 */
export const editTask = (data: ITask, id: number) => (dispatch: AppDispatch) => (getState: () => RootState) => {
    let { tasks } = getState().task
    const index = tasks.map((task) => task.id).indexOf(id)
    if (index >= 0) {
        tasks[index] = data
    }
    dispatch(taskReducer(tasks))
}

/**
 * Alterna la habilitación de una tarea seleccionada
 * @param id - id de la tarea seleccionada
 * @returns 
 */
export const changeDisableTask = (id: number) => (dispatch: AppDispatch) => (getState: () => RootState) => {
    let { tasks } = getState().task
    const index = tasks.map((task) => task.id).indexOf(id)
    if (index >= 0) {
        tasks[index].disable = !tasks[index].disable
    }
    dispatch(taskReducer(tasks))
}