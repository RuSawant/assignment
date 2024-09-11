import React from "react";
import Item from "../../components/item/Item";
import { useParams } from "react-router-dom";

export const Product = () => {
  let id = useParams();
  console.log(id);
  return (
    <div>
      <Item id={id.id} />
    </div>
  );
};
