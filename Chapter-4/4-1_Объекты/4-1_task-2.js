"use strict"

let schedule = {};

function isEmpty(obj) {
    return Object.keys(schedule).length === 0;
};

isEmpty(schedule);
alert(isEmpty(schedule));