import { theadValues } from "../const/labels";

/**
 * Devuelve el ancho de cada columna de la tabla de tareas
 * @param value - Título de una columna de la tabla
 * @returns Retorna el ancho correspondiente de la columna
 */
export const widthsTheadToDo = (value: string) => {
    if (value === theadValues[0]) {
        return "10%"
    } else {
        // utiliza la función calc para restar proporcionalmente
        // el tamaño del scroll vertical en el tbody
        return `calc(${90 / (theadValues.length - 1)}% - 2.66px)`
    }
}