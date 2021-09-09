import { AddShoppingCart } from "@material-ui/icons";
import BtnRender from "./BtnRender";
import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product_card">
      <img src={product.image} alt="" />

      <div className="product_box">
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
         <p>{product.description}</p> 
      </div>

      <BtnRender product={product} />
    </div>
  );
};

export default Product;
