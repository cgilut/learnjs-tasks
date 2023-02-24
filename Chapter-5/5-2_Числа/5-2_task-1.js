"use strict"

function sum () {
    let firstNumber = +prompt("Пожалуйста, введите первое значение", 0)
    let secondNumber = +prompt("Пожалуйста, введите второе значение", 0)
    return firstNumber + secondNumber;
}

alert(`Сумма равна ${sum()}.`);

