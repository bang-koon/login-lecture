"use strict";

const users = {
    id: ["우림", "나대리", "김팀장"],
    pswd: ["1234", "1234", "12345"],
};

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
    if (users.id.includes(id)) {
        const idx = users.id.indexOf(id);
        if(users.pswd[idx] === pswd) {
            return res.json({
                success: true,
            });
        }
    }

    return res.json({
        success: false,
        msg: "login failed",
    })
    },
}


module.exports = {
    output,
    process,
};