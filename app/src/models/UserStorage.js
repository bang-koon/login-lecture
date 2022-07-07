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
}

module.exports = UserStorage; 