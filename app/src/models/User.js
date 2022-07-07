"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body;
        const { id, pswd } = UserStorage.getUserInfo(body.id);
        // getUserInfo의 return 값이 id를 이용해 pswd를 가져옴
        // 굳이 그렇게 하나 싶지만 name이라는 값을 가져올 수도 있기에 그런듯?(유지보수 등 이점)

        if (id) {
            if (id === body.id && pswd === body.pswd) {
                return { success: true };
            }
            return {success: false, msg: "비밀번호 틀림" };
        }
        return { success: false, msg: "존재하지 않는 아이디" };
    }
};

module.exports = User;