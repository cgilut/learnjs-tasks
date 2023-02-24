"use strict"

function readNumber() {
    while (true) {
        let input = prompt("Введите число: ", "");

        if (input === null || input === "") {
            return null;
        };

        let num = Number(input);

        if (isNaN(num)) {
            alert("Ошибка! Пожалуйста, введите число: ");
        } else {
            return +num;
        };
    };
};

alert(`Число: ${readNumber()}.`);