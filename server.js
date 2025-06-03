const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const path = require("path");
const users = require("./routes/index");
require("dotenv").config();
const database = require("./config/database")

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use('/home', users);

app.get('/', (req, res) => {
  res.redirect('/home');
})

database.connect().then(() => {
  app.use('/', users)
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});