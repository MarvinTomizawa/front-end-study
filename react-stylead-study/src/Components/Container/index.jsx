import React from "react";
import styled from "styled-components";
import Titulo from "../Titulo";
import Conta from "../Conta";
import { mediaThreshold } from "../UI/Variaveis";
import { Extrato } from "../Extrato";

const ContainerElement = styled.div`
  background-color: ${({ theme }) => theme.inside};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};

  @media (max-width: ${mediaThreshold}) {
    flex-direction: column;
  }
`;

const Container = () => {
  return (
    <ContainerElement>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </ContainerElement>
  );
};

export default Container;
