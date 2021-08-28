const fs = require("fs");

const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const { restart } = require("nodemon");

const productSchema = new mongoose.Schema({
  title: String,
  id: String,
  price: Number,
  description: String,
  category: String,
  image: String,
});

const Product = mongoose.model("Product", productSchema);


// get all products 

app.get("/products", (req, res) => {
  const { min, max, category, title,price } = req.query;

  Product.find(
    {
      $or: [
        { min: min },
        { max: max },
        { category: category },
        { title: title },
        {price:price}
      ],
    },
    (err, products) => {
      if (min) {
        products = products.filter((p) => p.price > min);
      }

      if (max) {
        products = products.filter((p) => p.price < max);
      }

      if (category) {
        products = products.filter((p) =>
          p.category.toLowerCase().includes(category.toLowerCase())
        );
      }

      if (title) {
        products = products.filter((p) =>
          p.title.toLowerCase().includes(title.toLowerCase())
        );
        if(price){
          products=products.filter((p)=>p.price===price)
        }
      }

      if (products.length > 0) {
        res.send(products);
      } else {
        res.send("There are no matching products!");
      }
    }
  );
});



// get specific product
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
console.log(id);
Product.findById(id,(err, data) => {
  if (!err)
  {
    res.send(data);
  }
  else
  {
    res.send("ERROR, did not find product.");
  }
});
});

// add specific products to list

app.post("/products", (req, res) => {
  const { title, price, description,image,category } = req.body;
  if(title && price && description && image && category) {
    const product=new Product({title, price, description, image, category});
    product.save();
    res.send("The product was added successfully to the list")
  } 
  else res.send("missing products values");
});

// delete specific product by id from the list

app.delete("/products/:id", (req, res) => {
 
   const{id}=req.params;
   
   Product.findOneAndDelete(id, (err, product) => {
     if(product){
       res.send("Product was deleted successfully")
     }else{
       res.send(" Failed to delete,Can't find the product")
     }
   });
});

// update specific product in list

app.put("/products/:id", (req, res) => {
  const {id}=req.params;
  const {title, price, description, image, category}=req.body;
  const updateFields={}
  title ? (updateFields.title = title) : null;
  price ? (updateFields.price = price) : null;
  description ? (updateFields.description = description) : null;
  category ? (updateFields.category = category) : null;
  image ? (updateFields.image = image) : null;
  
  Product.findByIdAndUpdate(id, updateFields, (err, data) => {
    if (!err) {
      res.send("Updated.");
    } else {
      res.send("ERROR, did not update product.");
    }
  });
});


function initProduct() {
  Product.findOne((err, product) => {
    if (!product) {
      fs.readFile("./products.json", "utf8", (err, data) => {
        let initProducts = JSON.parse(data);
        Product.insertMany(initProducts, (err, products) => {});
      });
    }
  });
}

initProduct();

app.get("*", (req, res) => {
  res.send(404);
});



mongoose.connect(
  "mongodb://localhost/gocode_shop",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTechnology: true,
  },
  () => {
    app.listen(9080);
  }
);

