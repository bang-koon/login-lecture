"user strict";

// modules
const express = require("express");
// const bodyParser = require("body-parser"); // req.body확인 시 필요, 바디 파싱 시
const app = express();

const PORT = 3000;

// routing
const home = require("./src/routes/home");
// const { urlencoded } = require("body-parser");

// app setting
app.set('views', './src/views');
app.set('view engine', 'ejs');

// views/login.ejs 에서 js에 접근하게 하는 미들웨어, 정적파일(js,css,omg등)을 사용하기 위해
app.use(express.static(`${__dirname}/src/public`)); // __dirname + '/src/public'
app.use(express.urlencoded({ extended: true}));
app.use(express.json()); // json데이터 파싱 용
app.use("/", home); // 미들웨어 등록 메서드

module.exports = app;