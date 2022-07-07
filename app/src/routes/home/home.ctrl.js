"use strict";

// const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");

const output = {
    hello: (req, res) => {
        // root 요청 시 기능
        res.render("home/index"); // view를 view로 지정했기에 생략
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        // console.log(response);
        return res.json(response);
        },

    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response); 
    }
};


module.exports = {
    output,
    process,
};