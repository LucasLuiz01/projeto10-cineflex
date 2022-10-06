import styled from "styled-components"
import PageChoseMovie from "./PageChoseMovie"
export default function App() {
    return (
        <Container >
            <Menu><p>CINEFLIX</p></Menu>
            <Chose><p>Selecione o filme</p></Chose>
        </Container>
    )
}
const Container = styled.div`
  background-color: #FFFFFF;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
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
const Menu = styled.div`
width: 100vw;
height: 67px;
display: flex;
justify-content: center;
background-color: #C3CFD9;
align-items: center;
    p {
        color: #E8833A;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 34px;
    }
`