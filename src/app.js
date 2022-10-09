import styled from "styled-components";
import PageChoseMovie from "./PageOne";
import React from "react";
import PageTwo from "./PageTwo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTree from "./PageTree";
import { GlobalStyle } from "./globalstyle";
import PageFour from "./PageFour";
import { useState } from "react";

export default function App() {
  const [filmeEscolhido, setFilmeEscolhido] = useState(null);
  const [sessaoEscolhido, setSessaoEscolhido] = useState(null);
  const [cpf, setCpf] = useState(Number);
  const [assento, setAssento] = useState();
  const [nome, setNome] = useState("");
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Container>
        <Menu>
          <p>CINEFLIX</p>
        </Menu>
        <Routes>
          <Route path="/" element={<PageChoseMovie />} />
          <Route
            path="/filme/:id"
            element={
              <PageTwo
                setFilmeEscolhido={setFilmeEscolhido}
                filmeEscolhido={filmeEscolhido}
              />
            }
          />
          <Route path="/sessao/:idSessao" element={
          <PageTree setSessaoEscolhido={setSessaoEscolhido} setCpf={setCpf} cpf={cpf}
          setNome={setNome} nome={nome} setAssento={setAssento}
          sessaoEscolhido={sessaoEscolhido} />
          } />
          <Route path="/sucesso" element={<PageFour nome={nome} cpf={cpf} assento={assento}
          sessaoEscolhido={sessaoEscolhido} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
const Container = styled.div`
  background-color: #ffffff;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;

const Menu = styled.div`
  width: 100vw;
  height: 67px;
  display: flex;
  justify-content: center;
  background-color: #c3cfd9;
  align-items: center;
  p {
    color: #e8833a;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 34px;
  }
`;
