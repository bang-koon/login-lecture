"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    pswd = document.querySelector("#pswd"),
    confirmPswd = document.querySelector("#confirm-pswd"),
    registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", register);

function register(e) {
    e.preventDefault();
    if (!id.value || !pswd.value || !name.value) return alert("입력해");
    if (pswd.value !== confirmPswd.value) return alert("비밀번호 불일치");

    const req = {
        id: id.value,
        name: name.value,
        pswd: pswd.value,
    };
    
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json()) // 응답을 받으면
    .then((res) => {
        if (res.success) {
        location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러"));
    });
}