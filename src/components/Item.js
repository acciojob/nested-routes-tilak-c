import React from "react";
import { useParams } from "react-router-dom";

const Item = () => {
  const { itemName } = useParams();
  return <div>{itemName}</div>;
};

export default Item;