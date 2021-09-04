import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";

import { AddShoppingCart } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import useStyles from "./styles";

const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <ProductCardWrapper>
      <Card className={classes.root}>
        <ImageContainer>
          <Image src={product.image} alt={product.title} />
        </ImageContainer>
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="h5">{product.price}$</Typography>
          </div>
          <Typography  dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary"/>
          <CardActions disableSpacing className={classes.CardActions}>
            <IconButton aria-label="Add to Cart">
              <AddShoppingCart />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </ProductCardWrapper>
  );
};

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 10px;
  background-color: #fff;
  font-size: 2rem;
`;

const Image = styled.img`
  height: 100%;
`;

const ImageContainer = styled.div`
  height: 15rem;
  padding: 3rem;
  margin: 0 auto;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  height: 100%;
  padding: 2rem;
  border-top: 1px solid;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
`;

const Title = styled.div`
  font-weight: bold;
`;

export default Product;
