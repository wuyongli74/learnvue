const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 导入入口
    entry: './src/main.js',
    // 导入出口
    output: {
        // 路径(动态获取路径)
        path: path.resolve(__dirname, '../dist'),
        // 文件名
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                // css-loader只负责将css文件进行加载
                // style-loader负责将样式添加到DOM中
                // 使用多个loader时，是从右向左
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/i,
                loader: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当加载的图片，小于limit时，会将图片编译成base64字符串形式，
                            // 当加载的图片，大于limit时，需要使用file-loader模块进行加载
                            limit: 13000,
                            name: 'img/[name].[hash:8].[ext]'
                        },
                    }
                ]
            },
            {
                test: /\.js$/,
                // exclude：排除
                // include：包含
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.css', '.vue'],
        // alias：别名
        // git commit -m '注释'
        // git c ''
        // git config alias ''
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    // 版权配置
    plugins: [
        new webpack.BannerPlugin('最终版权归aaa所有'),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ],
}