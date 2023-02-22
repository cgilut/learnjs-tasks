"use strict"



function Calculator() {

    this.read = function() {
        this.firstNumber = +prompt("Пожалуйста, введите первое значение", 0)
        this.secondNumber = +prompt("Пожалуйста, введите второе значение", 0)
    };
  
    this.sum = function() {
        return this.firstNumber + this.secondNumber;
    };
  
    this.mul = function() {
        return this.firstNumber * this.secondNumber;
    };
};

let calculator = new Calculator();
calculator.read();

alert( `Сумма равна ${calculator.sum()}.` );
alert( `Произведение равно ${calculator.mul()}.` );