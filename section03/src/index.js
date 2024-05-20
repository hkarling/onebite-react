console.log("Hello, nodejs");

// 1. CommonJS Module

// const moduleData = require("./math");
// console.log(moduleData);

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// const { add, sub } = require("./math");
// console.log(add(1, 2));
// console.log(sub(1, 2));

// 2. ES module
// import { add, sub } from "./math.js";
// console.log(add(1, 2));
// console.log(sub(1, 2));

// import mul from "./math.js";
// console.log(mul(3, 4));

// import mul, { add, sub } from "./math.js";
// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(3, 4));

import randomColor from "randomcolor";

var color = randomColor();
console.log(color);
