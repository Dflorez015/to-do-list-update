import styled from "styled-components";
import { appear, borderRadius, gap, padding, standOutKF, scroll } from "./globalStyle";

/**
 * Div-----------------------------------------------
 */
export const StyleFlex = styled.div`
display: flex;
margin: auto;
flex-direction: ${({ theme }) => (theme.direction)};
gap: ${({ theme }) => (theme.gap)};
width: ${({ theme }) => (theme.width)};
justify-content: ${({ theme }) => (theme.justifyC)};
align-items: ${({ theme }) => (theme.align)};
`

export const StyleCard = styled.div`
grid-area: ${({ theme }) => (theme.area ? theme.area : "")};
background-color: white;
width: clamp(40ch, 50%, 75ch);
height: fit-content;
margin: 0px auto;
padding: 1.5rem 2rem;
box-shadow: 0px 3px 6px var(--gray-1);
border-radius: 22px;
display: flex;
flex-direction: column;
gap: ${gap};

//efects
animation: .4s ${standOutKF} linear;

& div {
    animation: .6s ${appear} ease-in;
}
`

/**
 * Tables-----------------------------------------------
 */
export const StyleTableRow = styled.div`
display: flex;
gap: 0px;
width: 100%;
padding: 0.5rem 0px;
border-bottom: solid 1px var(--gray-2);
`

export const StyleTableHead = styled(StyleTableRow)`
padding: ${padding} 0px;
background-color: ${({ theme }) => (theme.bgC)};
`

export const StyleTbody = styled(StyleFlex)`
overflow-y: scroll;
max-height: ${({ theme }) => (theme.mheight)};
${scroll}
`

export const StyleTableItem = styled.div`
color:  ${({ theme }) => (theme.color)};
text-align: ${({ theme }) => (theme.talign)};
width: ${({ theme }) => (theme.width)};
align-self: center;
`

/**
 * Nav-----------------------------------------------
 */
export const NavStyle = styled.div`
display: flex;
justify-content: center;
width: 100%;
margin-bottom: ${gap};
background-color: ${({ theme }) => (theme.bgC)};
`

/**
 * Button-----------------------------------------------
 */
export const StyleButton = styled.button`
 backGround-color :${({ theme }) => (theme.color)};
 color:${({ theme }) => (theme.textC)};
 :hover{    
     backGround-color: ${({ theme }) => (theme.colorHover)};
 }
 `
/**
 * Text-----------------------------------------------
 */
export const StyleLeyend = styled.div`
margin: 0px ${borderRadius};
text-align: center;
color: var(--gray-2);
border-bottom: 1px solid var(--gray-1);
`