import React from 'react'
import { rowCommon } from '../../const/themes'
import { StyleButton, StyleFlex } from '../../style/commonStyle'
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

export default function TaskOptions({ id }: { id: number }) {
    return (
        <StyleFlex theme={{ ...rowCommon, gap: "0px", justifyC: "space-evenly" }}>
            <StyleButton><FaRegEdit style={{fill: "var(--pink-2)"}}/></StyleButton>
            <StyleButton><FaTrashAlt  style={{fill: "var(--red-1)"}}/></StyleButton>
        </StyleFlex>
    )
}
