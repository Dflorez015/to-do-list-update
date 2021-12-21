import { ReactChild, ReactChildren } from 'react'
import { columnCommon } from '../const/themes'
import { StyleFlex, StyleTableHead, StyleTableItem } from '../style/commonStyle'

export default function Tables({ thead, children, widthF }:
    { thead: string[], children: ReactChild | ReactChildren, widthF: (val: string) => string }) {

    return (
        <StyleFlex theme={{ ...columnCommon, gap: ".1rem" }}> {/*table*/}
            <StyleTableHead theme={{ bgC: "var(--blue-2)" }}> {/* thead */}
                {thead.map((value, index) => (
                    <StyleTableItem
                        theme={{
                            color: "white",
                            talign: "center",
                            width: widthF(value)
                        }}
                        key={index}>
                        {value}
                    </StyleTableItem>
                ))} {/* th */}
            </StyleTableHead>
            {children} {/*tbody */}
        </StyleFlex>
    )
}
