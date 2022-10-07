import styled from "styled-components"

export default function PageTwo(){
    return(
        <>
        <Chose><p>Selecione o horário</p></Chose>
        <Dia>Quinta-feira - 24/06/2021</Dia>
        </>
    )
}
const Dia = styled.p`
font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 20px;
        color: #293845;
        margin: auto;
`

const Chose = styled.div`
 background-color: #FFFFFF;
  width: 100vw;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 24px;
        color: #293845;
    }
`