"use strict"

let age = prompt("Ваш возраст?");

if (age < 14 || age > 90) {
    alert("Ваш возраст НЕ находится в диапазоне между 14 и 90 включительно.");
} else {
    alert("Ваш возраст находится в диапазоне между 14 и 90 включительно.");
};