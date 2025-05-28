const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const path = require("path");
const assinaturas = require("./routes/assinantes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use("/assinantes", assinaturas);

app.get("/", (req, res) => {
  res.redirect("/assinantes");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

const userRoutes = require('./routes/index');
app.use('/', userRoutes);