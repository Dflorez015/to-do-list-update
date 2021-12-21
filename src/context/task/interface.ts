export interface ITask {
    id: number
    title: string
    content: string
    disable: boolean
}

export interface ItaskState {
    tasks: ITask[]
}