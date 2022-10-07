import styled from "styled-components"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function PageTree({sessaoEscolhido, setSessaoEscolhido}){
    const paramis = useParams();
    console.log(paramis.idSessao)
  useEffect(() => {
    const Url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${paramis.idSessao}/seats`;
    const promisse = axios.get(Url);
    promisse.then((movie) => {
        setSessaoEscolhido(movie.data);
    });
    promisse.catch((erro) => {
      console.log(erro.response.data);
    });
  }, []);
  if(sessaoEscolhido !== null){
    console.log(sessaoEscolhido)
  }
    return(
        <></>
    )
}