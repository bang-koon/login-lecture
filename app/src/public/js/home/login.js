"use strict";

const id = document.querySelector("#id"),
    pswd = document.querySelector("#pswd"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pswd: pswd.value,
    };
    
    // body로 데이터 전달할 땐 POST 씀, rest API 공부하래
    fetch("/login", {
        method: "POST",
        headers: {
            "COntent-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
        location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로긴중 에러"));
    });
}