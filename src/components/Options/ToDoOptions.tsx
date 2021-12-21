import React from 'react'
import { otherButton, rowCommon, sendButton } from '../../const/themes'
import { StyleButton, StyleFlex, StyleLeyend } from '../../style/commonStyle'
import { OptionsWrapperStyle } from './optionsStyle'

export function ToDoOptions() {
    return (
        <OptionsWrapperStyle>
            <StyleLeyend>Opciones</StyleLeyend>
            <StyleFlex theme={rowCommon}>
                <StyleButton theme={sendButton}>Agregar</StyleButton>
                <StyleButton theme={otherButton}>Api</StyleButton>
            </StyleFlex>
        </OptionsWrapperStyle>
    )
}
