require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { register, login, getRoles, updateUser } = require("./controllers/user");
const {
  addProduct,
  editProduct,
  deleteProduct,
  getProduct,
  getProducts,
} = require("./controllers/products");
const mapUser = require("./helpers/mapUser");
const authenticated = require("./middlewares/authenticated");
const hasRole = require("./middlewares/hasRole");
const ROLES = require("./constants/roles");
const mapProduct = require("./helpers/mapProduct");
const path = require("path");

const port = 3001;
const app = express();

app.use(express.static("../frontend/build"));

app.use(cookieParser());
app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { user, token } = await register(req.body.login, req.body.password);

    res
      .cookie("token", token, { httpOnly: true })
      .send({ error: null, user: mapUser(user) });
  } catch (e) {
    res.send({ error: e.message || "Unknown error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { user, token } = await login(req.body.login, req.body.password);

    res
      .cookie("token", token, { httpOnly: true })
      .send({ error: null, user: mapUser(user) });
  } catch (e) {
    res.send({ error: e.message || "Unknown error" });
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "", { httpOnly: true }).send({});
});

app.get("/products", async (req, res) => {
  const dataProd = await getProducts(req.query.search);

  res.send({ data: dataProd.map(mapProduct) });
});

app.get("/products/edit", async (req, res) => {
  const dataProd = await getProducts(req.query.search);

  res.send({ data: dataProd.map(mapProduct) });
});

app.get("/products/:id", async (req, res) => {
  try {
    const product = await getProduct(req.params.id);
    res.send({ data: mapProduct(product) });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error " });
  }
});

app.use(authenticated);

app.post(
  "/products/edit/new-product",
  hasRole([ROLES.ADMIN]),
  async (req, res) => {
    const newProduct = await addProduct({
      productName: req.body.productName,
      image: req.body.imageUrl,
      category: req.body.category,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description,
    });

    res.send({ data: mapProduct(newProduct) });
  }
);

app.put(
  "/products/edit/edit-product/:id",
  hasRole([ROLES.ADMIN]),
  async (req, res) => {
    const updateProduct = await editProduct(req.params.id, {
      productName: req.body.productName,
      image: req.body.imageUrl,
      category: req.body.category,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description,
    });

    res.send({ data: mapProduct(updateProduct) });
  }
);

app.delete(
  "/products/edit/delete/:id",
  hasRole([ROLES.ADMIN]),
  async (req, res) => {
    await deleteProduct(req.params.id);

    res.send({ error: "Удалено" });
  }
);

app.get("/users", hasRole([ROLES.ADMIN]), async (req, res) => {
  const users = await getUsers();

  res.send({ data: users.map(mapUser) });
});

app.get("/users/roles", hasRole([ROLES.ADMIN]), async (req, res) => {
  const roles = getRoles();

  res.send({ data: roles });
});

app.patch("/users/:id", hasRole([ROLES.ADMIN]), async (req, res) => {
  const newUser = await updateUser(req.params.id, {
    role: req.body.roleId,
  });

  res.send({ data: mapUser(newUser) });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

mongoose.connect(process.env.DB_CONNECTION_STRING).then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
