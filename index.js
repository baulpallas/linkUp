const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
require("dotenv").config();

var app = express();
const PORT = 8080;

express.static("./public");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static("."));

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("dev"));
app.use(require("./routes"));

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running on ${process.env.PORT || PORT}`);
});

console.log(process.env.DATABASE_URL);
