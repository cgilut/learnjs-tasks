"use strict"

let userInputInteger = prompt("Введите, пожалуйста, число больше чем 100.", 0)

while (userInputInteger <= 100 && userInputInteger !== null) {
    userInputInteger = prompt("Число должно быть больше 100, попробуйте еще раз.");
};