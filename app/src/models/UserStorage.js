"use strict";

class UserStorage {
    static #users = {
        id: ["park", "na", "kim"],
        pswd: ["1234", "1234", "12345"],
        name: ["박", "나", "김"],
    };
    
    // class 내에서 변수 접근 시 static
    static getUsers(...fields) {  
        const users = this.#users;
        const newUsers = fields.reduce( (newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    };
    
    static getUserInfo(id) {
        const users = this.#users;
        const userKeys = Object.keys(users);
        const idx = users.id.indexOf(id);
        const usersInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return usersInfo;
    }
}

module.exports = UserStorage; 