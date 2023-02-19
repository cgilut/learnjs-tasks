"use strict"

function pow() {
    let [x, n] = getNaturalInteger();
    alert(x ** n);
}

function getNaturalInteger() {
    // Проверяем, что x это число
    let x = +prompt("Введите число: ");
        while (!(Number.isInteger(+x))) {
            x = +prompt("Ошибка, введите число: ");
        };
    // Проверяем, что n это натуральное число больше 1
    let n = +prompt("Введите степень: ");
        while (!(Number.isInteger(+n) && +n > 1)) {
            n = +prompt("Введите степень, она должна быть натуральным числом и больше 1: ");
        };
    // возвращаем массив с полученными числами
    return [x, n];
};

pow();