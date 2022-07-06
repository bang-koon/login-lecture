"use strict";

const hello = (req, res) => {
    // root 요청 시 기능
    res.render("home/index"); // view를 view로 지정했기에 생략
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    hello,
    login,
};