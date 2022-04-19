var name = '小明'
var age = 19
var flag = true

function sum(num1, num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum(10, 23))
}

// 1.导入方式一：
export { flag, sum }

// 2.导入方式二：
export var num1 = 1000
export var height = 1.34

// 3.导出函数/类
export function mul(num1, num2) {
  return num1 + num2
}

export class Person {
  run() {
    console.log('在奔跑')
  }
}
