import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [endereco, setEndereco] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, numero, endereco, estado, cidade });
      }}
    >
      <TextField
        margin="normal"
        variant="outlined"
        label="Cep"
        type="text"
        id="cep"
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
      ></TextField>
      <TextField
        fullWidth
        margin="normal"
        variant="outlined"
        label="Endereço"
        type="text"
        id="address"
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
      ></TextField>
      <TextField
        margin="normal"
        variant="outlined"
        label="Número"
        type="number"
        id="number"
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
      ></TextField>
      <TextField
        margin="normal"
        variant="outlined"
        label="Estado"
        type="text"
        id="state"
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
      ></TextField>
      <TextField
        margin="normal"
        variant="outlined"
        label="Cidade"
        type="text"
        id="city"
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
      ></TextField>

      <Button fullWidth type="submit" variant="contained" color="primary">
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
