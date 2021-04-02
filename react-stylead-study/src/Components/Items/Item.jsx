import React from "react";
import styled from "styled-components";
import Image from "../ImageFilter";

const Item = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const ItemWrapper = styled.div`
  align-items: center;

  display: flex;
  flex-direction: column;
  padding: 10px;

  .titulo {
    font-weight: bold;
  }
`;

export default ({ value, type, from, date }) => {
  return (
    <Item>
      {Image(type)}
      <ItemWrapper>
        <span className="titulo">{type}</span>
        <span>{from}</span>
        <span>{value}</span>
      </ItemWrapper>
      <span>{date}</span>
    </Item>
  );
};
