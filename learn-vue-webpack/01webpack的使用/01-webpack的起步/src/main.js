// 1.使用commonjs的模块化规范
const {add, mul} = require("./mathUtils.js");
console.log(add(20, 8));
console.log(mul(34, 8));

// 2.使用ES6的模块化的规范
import {age, height, name} from './info';

console.log(name, age, height)