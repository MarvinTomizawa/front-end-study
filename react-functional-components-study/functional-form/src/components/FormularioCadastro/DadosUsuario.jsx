import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        margin="normal"
        id="email"
        required
        type="email"
        label="E-mail"
        fullWidth
        value={email}
        variant="outlined"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        margin="normal"
        id="password"
        required
        name="senha"
        type="password"
        label="Senha"
        fullWidth
        variant="outlined"
        value={senha}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        onBlur={validarCampos}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
      />
      <Button fullWidth type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
