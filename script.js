"use strict";

let arr = [];
let i = 0;

init();

function init() {
  setTimeout(init, 2000);

  if (i < 9) {
    i++;
    arr.push(i);
  } else {
    arr.shift();
    i++;
    arr.push(i);
  }

  console.log(arr);
}
