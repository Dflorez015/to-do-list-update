import styled, { createGlobalStyle, css, keyframes } from "styled-components"

export const borderRadius = "22px"
export const padding = ".5rem"
export const gap = ".5rem"
export const marg_left = "8rem" // x100 gap + ajuste
const backGroundButtonMain = "#fff"

// keyframes
export const standOutKF = keyframes`
0% {
    max-height: 0px;    
}
40%{
    max-height: 20%;    
}
60%{
    max-height: 40%;    
}
80%{
    max-height: 80%;    
}
100%{
    max-height: 100%;    
}
`

export const appear = keyframes`
from{
    opacity: 0;
}to{
    opacity: 1;
}
`

export const scroll = css`
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--gray-1);
  border-radius: 8px;
}
::-webkit-scrollbar-thumb {
  background: var(--blue-2);
  border-radius: 8px;
  :hover{
    background: var(--blue-1);
  }
}`

export const GlobalStyles = createGlobalStyle`

:root {
    --gray-1: #ECECEC;
    --gray-2: #b3afaf;

    --pink-1: #f8d7da;
    --pink-2: #f5c6cb;

    --red-wine: #be1e37;

    --blue-1: #2323c5;
    --blue-2: #2d8ef3;

    --red-1: #dc3545;
    --red-2: #991a26;
    
    --orange-1: #FF9220;
    --orange-2: #c97419;
    //assets
    --overlay-bg :#80808091;
}

*{
    padding: 0px;
    margin: 0px;
}

#root {
    width: 100vw;
    height: 100vh;
}

& button {
    width: fit-content;
    border: none;    
    border-radius: ${borderRadius};
    backGround-color: ${backGroundButtonMain};
    padding: ${padding};
    box-shadow: none;
    transition: backGround-color .2s ease-in-out,
        box-shadow .3s ease-in-out;
    //effects
    :hover{       
        cursor: pointer;
        box-shadow: 0px 3px 6px #00000029;
    }
}

& a {
    text-decoration: none;
    text-align: center;
    color: black;
    transition: color .2s ease-in-out;
    padding: ${gap};
    :hover {
        color: var(--hover-txt);
    }    
}

// NavLink
& .active {
     background-color: var(--gray-1);
     border-radius: 10px 10px 0px 0px;
 }

// sweet Alert
& .btn__succes {
    background-color: var(--blue-2);
    color: white;
    font-weight: 500;
    font-size: 1rem;
}

// sweet Alert
& .btn__cancel {
    background-color: var(--red-1);
    color: white;
    margin-left: ${padding};
    font-weight: 500;
    font-size: 1rem;
}
`

export const MainWrapper = styled.div`
 height: 100%;
 width: 100%;
 overflow-y: hidden;
`

export const LoadingWrapper = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
z-index: 999;

& div {
    width: 100%;
    height: 100%;
    background-color: var(--overlay-bg);
}
`

export const AppWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: 100%;
height: 100%;
font-family: "Poppins", sans-serif;

& input[type=number]::-webkit-inner-spin-button, 
 input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
& input[type=number] { -moz-appearance:textfield; }

& svg {
    width: 1.5rem;
    height: 1.5rem;
}

`
