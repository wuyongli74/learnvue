const path = require('path')

module.exports = {
    // 导入入口
    entry: './src/main.js',
    // 导入出口
    output: {
        // 路径(动态获取路径)
        path: path.resolve(__dirname, 'dist'),
        // 文件名
        filename: 'bundle.js'
    },
}