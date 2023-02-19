"use strict"

function checkAgeOr(age) {
    return ( age > 18) || confirm("Родители разрешили?");
};

function checkAgeQuestionMark(age) {
    return (age > 18) ? true : confirm("Родители разрешили?");
}