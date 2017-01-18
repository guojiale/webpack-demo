/**
 * Created by h on 2017/1/16.
 */
var path=require('path');//引入path模块
var webpack=require('webpack');
var htmlWebpackPlugin=require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var jqueryPath=path.join(__dirname,'./node_modules/jquery/dist/jquery.js');

module.exports={
    entry:path.join(__dirname,'./app/index.js'),//入口文件
    output:{
        filename:'bundle.js',//生成的文件名
        path:path.join(__dirname,'./build')//生成的文件目录
    },
    resolve:{
        extensions: ['', '.js', '.json', '.scss'],//自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        alias:{
            jqueryRoute:jqueryPath //我这样指定了文件路径，那么在./app/index.js文件里直接就可以 var $=require('jquery1');
        }
    },
    module: {
        noParse: [/jquery/],// 如果一个模块中没有其它新的依赖 就可以配置这项，webpack 将不再扫描这个文件中的依赖。
        loaders: [ //定义了一系列的加载器   Array
            {
                test: /\.jsx?$/, //正则，匹配到的文件后缀名
                // loader/loaders：string|array，处理匹配到的文件
                loader: 'babel-loader',
                exclude:'node_modules'// 路径中含有 node_modules 的就不去解析。
                // include：String|Array  使用 include 来限定 babel 的使用范围，能够提高效率
                //include: [
                      // 只去解析运行目录下的 src 和 demo 文件夹
                      // path.join(process.cwd(), './src'),
                       // path.join(process.cwd(), './demo')
                // ],
            },
            {
                test:/\.css$/,
                    loader:"style!css!postcss-loader"
            },
            {
                test:/\.(jpg|png|gif)$/,
                    loader:'url?limit=20&name=images/[name].[ext]?[hash]'//这里只是处理了css中的图片
            },
            {
                test:/\.(ttf|woff|woff2|svg|eot)$/,
                loader:'url'
            },
            {
                test: /\.html$/,
                loader: 'html-withimg-loader'//处理html中的图片
            }
        ]
    },
    postcss: [autoprefixer()],
    plugins:[
        new htmlWebpackPlugin({
            title: 'webpack-demo',
            filename : 'index.html',
            template:'./app/index.html'
        })
    ],
    externals: {
        zepto: "Zepto"//这需要再html插入<script src="http://www.zeptojs.cn/zepto.min.js"></script> 然后在index.js consot zepto=require('zepto');就可以用了[This link](http://example.net/) has no title attribute.
    }
}