import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        fullWidth
        margin="normal"
        variant="outlined"
        label="Nome"
        id="first-name"
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        fullWidth
        margin="normal"
        label="Sobrenome"
        id="last-name"
        variant="outlined"
      />
      <TextField
        value={cpf}
        onBlur={validarCampos}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        fullWidth
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        margin="normal"
        name="cpf"
        label="Cpf"
        id="cpf"
        variant="outlined"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => setPromocoes(event.target.checked)}
            name="promotions"
            id="promotions"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => setNovidades(event.target.checked)}
            name="news"
            id="news"
            color="primary"
          />
        }
      />

      <Button fullWidth type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
