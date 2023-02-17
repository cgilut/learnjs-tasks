"use strict"

let login = prompt("Вы Сотрудник или Директор?");
let message = 
    (login == "Сотрудник") ? "Привет" :
    (login == "Директор") ? "Здравствуйте" :
    (login == "") ? "Нет логина" : 
    "";

alert(message);