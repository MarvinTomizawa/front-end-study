import { Container, Typography } from "@material-ui/core";
import React from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
import { validarCpf, validarSenha } from "./models/Cadastro";

function App() {
  return (
    <Container maxWidth="sm" component="article">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCpf, senha: validarSenha }}
      >
        <FormularioCadastro aoEnviarForm={AoEnviarForm}></FormularioCadastro>
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function AoEnviarForm(dados) {
  console.log(dados);
}

export default App;
