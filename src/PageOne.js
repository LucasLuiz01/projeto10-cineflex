import styled from "styled-components";
import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
export default function PageChoseMovie() {
  const [object, setObject] = React.useState([]);
  useEffect(() => {
    const url = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
    const promisse = axios.get(url);
    promisse.then((movies) => {
      setObject(movies.data);
    });
    promisse.catch((erro) => {
      console.log(erro.response.data);
    });
  }, []);
  if (object !== undefined) {
    return (
      <>
        <Chose>
          <p>Selecione o filme</p>
        </Chose>
        <Teste>
          {object.map((o) => (
            <ImageMoovie
              data-identifier="movie-outdoor"
              key={o.id}
              tittle={o.tittle}
              id={o.id}
              imagem={o.posterURL}
            />
          ))}
        </Teste>
      </>
    );
  }
  return <></>;
}
function ImageMoovie({ imagem, id, tittle }) {
  return (
    <Movie>
      <Link to={`/filme/${id}`}>
        <img alt={tittle} id={id} src={imagem} />
      </Link>
    </Movie>
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
    color: #293845;
  }
`;
const Teste = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Movie = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 27px;
  img {
    height: 193px;
    width: 129px;
    padding-left: 37px;
  }
`;
