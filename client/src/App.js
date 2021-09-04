import { NavBar, Products } from "./components";
import { useEffect, useState } from "react";

import React from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [firstProducts, setFirstProducts] = useState([]);
  const [preLoading, setPreLoading] = useState(false);
  const [productsFilterPrice, setProductsFilterPrice] = useState([]);

  useEffect(() => {
    setPreLoading(true);
    fetch("/api/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setFirstProducts(json);
        setProductsFilterPrice(json);
      });
  }, []);

  const onHandleChange = (event, newValue) => {
    console.log(newValue);
    setProducts(
      productsFilterPrice.filter(
        (choose) => choose.price >= newValue[0] && choose.price <= newValue[1]
      )
    );
  };

  const values = productsFilterPrice
    .map((p) => p.price)
    .filter((value) => value > 0);

  const categories = [
    "All Products",
    ...firstProducts
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index),
  ];

  const onChoose = (c) => {
    console.log(c.target.value);
    if (c.target.value === "All Products") {
      setProducts(firstProducts);
      setProductsFilterPrice(firstProducts);
    } else {
      setProducts(
        firstProducts.filter((choose) => choose.category === c.target.value)
      );
      setProductsFilterPrice(
        firstProducts.filter((choose) => choose.category === c.target.value)
      );
    }
  };

  return (
    <div>
      <NavBar
        onChoose={onChoose}
        categories={categories}
        value={values}
        handleChange={onHandleChange}
      />
      <Products products={products} />
    </div>
  );
};

export default App;
