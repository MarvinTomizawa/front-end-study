import React from "react";
import styled from "styled-components";
import Item from "./Item";

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  list-style: none;

  li {
    width: 100%;
    margin: 2px 0;
  }
`;

export default (extratoLista) => {
  return (
    <Items>
      {extratoLista.extratoLista.map((extrato) => (
        <li key={extrato.id}>
          <Item
            value={extrato.value}
            type={extrato.type}
            from={extrato.from}
            date={extrato.date}
          />
        </li>
      ))}
    </Items>
  );
};
