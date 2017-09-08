/*
|--------------------------------------------------
| ThinkSNS+ Documentation.
|--------------------------------------------------
|
| 为了保障整个文档 javaScript 的统一性，所有与 JS 想关
| 的配置文件都应该使用 ES6 代码进行编写，例如 Webpack
| 配置文件。
|
*/

import webpack from 'webpack';
import path from 'path';
import fs from 'fs';

// 环境变量
const NODE_ENV = process.env.NODE_ENV || 'development';
const isHot = process.argv.includes('--hot');
const isProd = NODE_ENV === 'production';

// 按照不同环境，写入入口文件。
((source, target) => {
  fs.writeFileSync(target, fs.readFileSync(source));
})(
  path.resolve(__dirname, isHot ? 'index.hot.html' : 'index.build.html'),
  path.join(__dirname, 'index.html')
);

export default {

  // devtool
  // 参考 https://webpack.js.org/configuration/devtool/#devtool
  devtool: isProd ? false : 'source-map',

  // 入口配置
  // 参考 https://webpack.js.org/configuration/entry-context/#entry
  entry: {
    app: path.resolve(__dirname, 'src/main.js')
  },

  // 输出配置
  // 参考 https://webpack.js.org/configuration/output
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'assets'),
    publicPath: '/assets/',
  },

  // 模块配置
  // 参考 https://webpack.js.org/configuration/module/
  module: {

    // 模块加载器设置
    // 参考 https://webpack.js.org/configuration/module/#module-rules
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [ path.resolve(__dirname, 'src') ],
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  // 插件配置
  // 参考 https://webpack.js.org/configuration/plugins/#plugins
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV),
      },
    }),

    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      // filename: 'vendor.js',
      minChunks: ({ resource }) => (
        resource &&
        /\.jsx?$/.test(resource) &&
        resource.indexOf(path.join(__dirname, 'node_modules')) === 0
      )
    }),

    //  split manifest js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),

    // 根据环境变量选择插件
    ...(isProd ? [ // 生产环境

      // build optimization plugins
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: false,
        },
        sourceMap: false,
      }),

    ] : [ // 开发环境
      new webpack.NoEmitOnErrorsPlugin(),
    ]),

    // webpack-dev-server enhancement plugins
    ...(! isHot ? [] : [
      new webpack.HotModuleReplacementPlugin()
    ]),
  ],

  // devServer 配置
  // 参考 https://webpack.js.org/configuration/dev-server/
  devServer: {
    publicPath: '/assets/',
    // boolean | string | array, static file location
    contentBase: [
      path.join(__dirname, 'assets'),
    ],
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    setup(app) {
      // Entry.
      app.get('/', function (request, response) {
        response.sendFile(path.resolve(__dirname, 'index.html'), {
          headers: {
            'Content-Type': 'text/html; charset=UTF-8',
          }
        });
      });

      // docs
      app.get('/docs/*', function (request, response) {
        const filename = path.resolve(__dirname + request.path);

        if (! fs.existsSync(filename)) {
          response.sendStatus(404);
        } else {
          response.sendFile(filename);
        }
      });

      // 404
      app.get('/*', function (request, response, next) {
        if (request.path.match('/assets') || request.path.match('.json')) {
          return next();
        }

        response.sendFile(path.resolve(__dirname, '404.html'));
      });
    },
  }
};
