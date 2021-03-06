const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.0,
        count: 1,
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.0,
        count: 1,
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.0,
        count: 1,
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.0,
        count: 1,
      },
    ],
  },
  computed: {
    totalPrice() {
      // 1.普通的for循环
      // let totalPrice = 0
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].count * this.books[i].price
      // }
      // return totalPrice
      // 2.for (let i in this.books)
      // let totalPrice = 0
      // for (let i in this.books) {
      //   const book = this.books[i]
      //   totalPrice += book.count * book.price
      // }
      // return totalPrice

      // 3.for(let i of this.books)
      // let totalPrice = 0
      // for (let item of this.books) {
      //   totalPrice += item.price * item.count
      // }
      // return totalPrice
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count
      }, 0)
    },
  },
  methods: {
    // getFinalPrice(price) {
    //   return '￥' + item.price.toFixed(2)
    // },
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    removeHandle(index) {
      this.books.splice(index, 1)
    },
  },

  // 过滤器
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    },
  },
})

/**
 * 编程范式：命令式编程/声明式编程
 * 编程范式：面向对象编程(第一公民：对象)/函数式编程(第一公民：函数)
 * filter / map / reduce
 * filter中的回调函数有一个要求：必须返回一个Boolean值
 * true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
 * false：当返回false时，函数内部会过滤掉这次的n
 */
const nums = [19, 99, 37, 76, 834, 84, 284, 174, 674]

let total = nums
  .filter(n => n < 100)
  .map(n => n * 2)
  .reduce((pre, n) => pre + n)
console.log(total)

// let total = nums
//   .filter(function (n) {
//     return n < 100
//   })
//   .map(function (n) {
//     return n * 2
//   })
//   .reduce(function (preValue, n) {
//     return preValue + n
//   }, 0)

// console.log(total)

// // 1.filter的使用
// let newNums = nums.filter(function (n) {
//   return n < 100
// })

// console.log(newNums)

// // 2.map的使用
// let new2Nums = newNums.map(function (n) {
//   return n * 2
// })

// console.log(new2Nums)

// // 3.reduce的使用
// // reduce作用对数组中所有的内容进行汇总
// // reduce(参数一，参数二)
// let total = new2Nums.reduce(function (preValue, n) {
//   return preValue + n
// }, 0)

// console.log(total)

// // 1.需求：取出所有小于100的数字
// let newNums = []
// for (let n of nums) {
//   if (n < 100) {
//     newNums.push(n)
//   }
// }

// // 2.需求：将所有小于100的数字进行转化：全部*2
// let new2Nums = []
// for (let n of newNums) {
//   new2Nums.push(n * 2)
// }
// console.log(new2Nums)

// // 3.需求：将所有new2Nums数字相加，得到最终的结果
// let total = 0
// for (let n of new2Nums) {
//   total += n
// }
// console.log(total)
