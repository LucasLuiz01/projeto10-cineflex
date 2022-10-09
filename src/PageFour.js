import { Link } from "react-router-dom";
import styled from "styled-components";
export default function PageFour({sessaoEscolhido}) {
    {console.log(sessaoEscolhido)}
  return (
    <>
   
    <Chose>
      <p>Pedido feito com sucesso!</p>
    </Chose>
    <Filme>
        <h1>Filme e sessão</h1>
        <p>{sessaoEscolhido.movie.title}</p>
        <p>{sessaoEscolhido.day.date} {sessaoEscolhido.name}</p>
    </Filme>
    <Filme>
        <h1>Ingressos</h1>
    </Filme>
    <Filme>
        <h1>Comprador</h1>
    </Filme>
    <Flex>
        <Link to="/">
    <EscolherAssento>Voltar pra Home</EscolherAssento>
    </Link>
    </Flex>
    </>
  );
}
const Chose = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 110px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #247A6B;
  }
`;
const Filme = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 110px;
  flex-direction: column;
  margin-left: 20px;
  align-items: center;
  h1{
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #293845;
    padding-bottom: 20px;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 22px;
    color: #293845;
  }
`;
const EscolherAssento = styled.button`
  font-family: "Roboto", sans-serif;
  background-color: #e8833a;
  font-weight: 400;
  border-radius: 3px;
  width: 225px;
  height: 43px;
  color: white;
  text-align: center;
  font-size: 18px;
`;
const Flex = styled.div`
display: flex;
justify-content: center;
`