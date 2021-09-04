import { Grid } from "@material-ui/core";
import Product from "./../Product/Product";
import React from "react";

const Products = ({ products }) => {
  return (
    <main>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={2}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
