import { Grid } from "@material-ui/core";
import Product from "./../Product/Product";
import React from "react";

const Products = ({ products }) => {
  return (
    <div className="products">
        {products.map((product) => (
            <Product product={product} />
         
        ))}
      </div>
   
  );
};

export default Products;
