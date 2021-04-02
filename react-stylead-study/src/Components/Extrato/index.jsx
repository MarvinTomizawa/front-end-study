import React from "react";
import { Box, Button } from "../UI";
import { extratoLista } from "../../info";
import Items from "../Items/Items";

export const Extrato = () => {
  return (
    <Box>
      <Items extratoLista={extratoLista.updates}></Items>
      <Button>Ver mais</Button>
    </Box>
  );
};
