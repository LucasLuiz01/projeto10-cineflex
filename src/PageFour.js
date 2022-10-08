import styled from "styled-components";
export default function PageFour() {
  return (
    <Chose>
      <p>Pedido feito com sucesso!</p>
    </Chose>
  );
}
const Chose = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #247A6B;
  }
`;