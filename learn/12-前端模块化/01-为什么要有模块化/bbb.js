var moduleB = (function () {
  // 导出的对象
  var obj = {}

  var name = '小红'
  var flag = false

  console.log(name)

  obj.flag = flag
  return obj
})()
