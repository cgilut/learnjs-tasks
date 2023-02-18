"use strict"

let userLogin = prompt("Кто там?", "");

    if (userLogin == "Админ") {

        let userPassword = prompt("Пароль?", "");

        if (userPassword == "Я Главный") {
            alert("Здравствуйте!");
        } else if (userPassword == "" || null) {
            alert("Отменено");
        } else {
            alert("Неверный пароль");
        };
        
    } else if (userLogin == "" || null) {
        alert("Отмена"); 
    } else {
        alert("Я вас не знаю");
    };