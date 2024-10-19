const express = require("express");
const app = express();
const cors = require("cors");
const pageShop = require ("../routes/create-page-shop")

app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(pageShop)

module.exports = app;
