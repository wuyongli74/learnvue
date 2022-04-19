const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
    plugins: [
        // 打包压缩文件
        new UglifyjsWebpackPlugin()
    ],
})