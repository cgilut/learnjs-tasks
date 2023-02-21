"use strict"

function multiplyByTwo(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        obj[key] *= 2;
      }
    }
  }
  
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyByTwo(menu);
  
  console.log(menu);
