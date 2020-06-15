const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports={
  context: path.resolve(__dirname, 'src'),
  mode:'development',
  entry:'./index.js',
  output:{
    filename:'bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
    port:3000
  },
  plugins:[
    new HTMLPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns:[
      {
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: path.resolve(__dirname, 'dist/')
      }
    ] })
  ],
  module:{
    rules:[{
      test: /\.(s[ac]ss|css)$/i,
      use: [
         'style-loader',
         'css-loader',
         'sass-loader'
      ]
    },
    {
      test: /\.(png|jpg|svg|gif|webp|ico)$/,
      use:[
        'file-loader'
      ]
    },
    {
      test: /\.(ttf|woff|woff2|eot|otf)$/,
      use:[
        'file-loader'
      ]
    }
    ]
  }
}
