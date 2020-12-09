const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
// const miniCssExtracrtPlugin=require()
module.exports={
    entry:{
        index:'./src/index.js',
        product:'./src/product.js'
    }, 
    output:{
        path:path.resolve(__dirname,'../dist/'),
        // filename:'bundle.js'
        filename: '[name].[hash].js' //[name] [hash] hash码
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                ]
            },
            {
                test:/\.less$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'less-loader'},
                ]
            },
            // {
            //     test:/\.(jpg|png|gif|webp|jpeg)$/,
            //     use:[
            //         {loader:'file-loader'},
            //     ]
            // },
            {
                test:/\.(jpg|png|gif|webp|jpeg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:102400
                        }
                    }
                ]
            },
            {
                test:/\.js$/,
                exclude:/(node_modules|brower_components)/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['env']
                        }
                    }
                ]
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            title:"网页标题" ,//网页标题
            template: './src/tp1. html' ,//处理htm1模板路径
            inject: 'head' ,//true默认值。script标签 位于html文件的body底部; body: script标签 位于html文件的body底 部;
                            //head: script标签 位于html文件的head中: false: 不插入生成的js文件
            minify: {//htm1压缩规则
                removeComments: false, //是 否移除注释
                removeAttributeQuotes: false,//是 移除属性的引号
                collapseWhitespace: false// 是否移除空白
            },
            filename: ' index_ 1. html ' //输出模板名称
        })
    ]
}