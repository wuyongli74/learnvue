// 1.使用commonjs的模块化规范
const {add, mul} = require("./js/mathUtils.js");
console.log(add(20, 8));
console.log(mul(34, 8));

// 2.使用ES6的模块化的规范
import {age, height, name} from './js/info';

console.log(name, age, height)

// 3.依赖css文件
require("./css/normal.css")

// 4.依赖less文件
require("./css/special.less")
// writeln()会自动换行
document.writeln('<h2>你好啊！</h2>')