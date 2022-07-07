"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
    hello: (req, res) => {
        // root 요청 시 기능
        res.render("home/index"); // view를 view로 지정했기에 생략
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            pswd = req.body.pswd;
            // userStorage = new UserStorage(); 인스턴스화 필요없
        
        const users = UserStorage.getUsers("id","pswd");
 
        
    const response = {};
    if (users.id.includes(id)) {
        const idx = users.id.indexOf(id);
        if(users.pswd[idx] === pswd) {
            response.success = true;
            return res.json(response);
        }
    }

    response.seuccess = false;
    response.msg = "login failed";
    return res.json(response);
    },
};


module.exports = {
    output,
    process,
};