"use strict"

let calculator = {
    read() {
        this.firstNumber = +prompt("Пожалуйста, введите первое значение", 0)
        this.secondNumber = +prompt("Пожалуйста, введите второе значение", 0)
    },

    sum() {
        return this.firstNumber + this.secondNumber;
    },

    mul() {
        return this.firstNumber * this.secondNumber;
    }
  };
  
  calculator.read();
  alert( `Сумма равна ${calculator.sum()}.` );
  alert( `Произведение равно ${calculator.mul()}.` );