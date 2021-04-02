import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoas";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviarForm, validacoes }) {
  const [etapaAtual, setEtapa] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(() => {
    if(etapaAtual === formularios.length -1){
      aoEnviarForm(dadosColetados);
    }
  })

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados}></DadosUsuario>,
    <DadosPessoais aoEnviar={coletarDados}></DadosPessoais>,
    <DadosEntrega aoEnviar={coletarDados}></DadosEntrega>,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    setEtapa(etapaAtual + 1);
  }

  return <>
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
  {formularios[etapaAtual]}</>;
}

export default FormularioCadastro;
