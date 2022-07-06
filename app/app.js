"user strict";

// modules
const express = require("express");
const app = express();

const PORT = 3000;

// routing
const home = require("./src/routes/home");

// app setting
app.set('views', './src/views');
app.set('view engine', 'ejs');

// views/login.ejs 에서 js에 접근하게 하는 미들웨어
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); // 미들웨어 등록 메서드

module.exports = app;