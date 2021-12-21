import { useSelector } from 'react-redux'
import { StyleCard, StyleFlex, StyleTbody, StyleTableRow, StyleTableItem } from '../../style/commonStyle'
import { columnCommon, tbodyCommon } from '../../const/themes'
import { ToDoOptions } from '../../components/Options/ToDoOptions'
import Tables from '../../components/Tables'
import { RootState } from '../../context/store'
import { theadValues } from '../../const/labels'
import TaskOptions from '../../components/Options/TaskOptions'
import { widthsTheadToDo } from '../../util/widthInputs'

export default function ToDoList() {

    const { tasks } = useSelector((state: RootState) => state.task)

    return (
        <StyleFlex theme={{ ...columnCommon, width: "80%" }}>
            <ToDoOptions />
            <StyleCard>
                <Tables thead={theadValues} widthF={widthsTheadToDo}>
                    <StyleTbody theme={tbodyCommon}> {/* tbody */}
                        {tasks.map((tsk, index) => (
                            <StyleTableRow key={index}>
                                <StyleTableItem
                                    theme={{
                                        talign: "center",
                                        width: "10%"
                                    }}>
                                    <input type="checkbox" style={{ height: "1rem", width: "1rem" }} name="disabled" id={"" + tsk.id} />
                                </StyleTableItem> {/* Check */}
                                <StyleTableItem
                                    theme={{
                                        talign: "center",
                                        width: `${90 / (theadValues.length - 1)}%`
                                    }}>
                                    {tsk.title}
                                </StyleTableItem> {/* Título */}
                                <StyleTableItem
                                    theme={{
                                        talign: "left",
                                        width: `${90 / (theadValues.length - 1)}%`
                                    }}>
                                    {tsk.content}
                                </StyleTableItem> {/* Contenido */}
                                <StyleTableItem
                                    theme={{
                                        width: `${90 / (theadValues.length - 1)}%`
                                    }}>
                                    <TaskOptions id={tsk.id} />
                                </StyleTableItem> {/* Opciones de la tarea */}
                            </StyleTableRow>
                        ))}
                    </StyleTbody>
                </Tables>
            </StyleCard>
        </StyleFlex>
    )
}
