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
  margin-left: 30px;
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