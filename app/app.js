"user strict";

// modules
const express = require("express");
const app = express();

const PORT = 3000;



// app setting
app.set('views', './src/views');
app.set('view engine', 'ejs');

const home = require("./src/routes/home"); // index.js
app.use("/", home); // 미들웨어 등록 메서드

module.exports = app;