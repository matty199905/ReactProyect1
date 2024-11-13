import styled from "styled-components"



export const UserStyled = styled.div`
display:flex;
align-items: center;
font-size: 35px;
color: white;
&:hover{
    cursor: pointer;
    transition: all ease 0.5s;
    color: #ff7b00;
}
@media (max-width: 470px) {
font-size: 30px;
}
`

export const IniciaSesion = styled.span`
font-size: 16px;
font-weight: 300;
padding: 10px;
@media (max-width: 400px) {
display: none;
}
`
