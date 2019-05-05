const webpack = require('webpack');
const path = require('path');

/* PLUGINS */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/* PATH DECLARATIONS */
const _MODULES = path.join(__dirname, '/node_modules');
const distPath = path.resolve(__dirname, 'dist');
const entryPath = path.resolve(__dirname, 'src/index.jsx');

/* RULE CONFIGURATIONS */
/* -- CSS/SCSS */
const _SASS_CSS_Rules = {
  test: /\.(s*)css$/,
  exclude: '/node_modules/',
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'sass-loader']
    })
};
/* -- IMAGES */
const Image_rules = {
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    'file-loader'
  ]
};
/* -- JS/JSX */
const JS_rules = {
  test: /\.(js||jsx)?/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader"
  }
};



const _JS_JSX_RULES = {
  test: /\.(js||jsx)?/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    presets: ['@babel/env', '@babel/react']
  }
};

const _SASS_CSS_RULES = {
  test: /\.(s*)css$/,
  exclude: '/node_modules/',
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'sass-loader']
    })
};

const _IMAGE_RULES = {
  test: /\.(png|jpg|gif)$/,
  loader: 'url-loader',
  options: {
    limit: '25000'
  }
};

/* OUTPUT CONFIGURATION */
const outputConfig = {
  filename: '[name].bundle.js',
  chunkFilename: '[name].bundle.js',
  path: distPath,
  publicPath: '/'
};

module.exports = {
  entry: entryPath,
  output: outputConfig,
  module: {
    rules: [
      _JS_JSX_RULES,
      _SASS_CSS_RULES,
      _IMAGE_RULES
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       styles: {
  //         name: 'styles',
  //         test: /\.(s*)css$/,
  //         chunks: 'all',
  //         enforce: true,
  //       },
  //     },
  //   },
  // },
  plugins: [
    new ExtractTextPlugin({filename: 'styles.css'})
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.json', '.jsx'],
    modules: [_MODULES]
  }
};



// // EXTRACT ENV KEYS FOR F-E USE
// const env = dotenv.config().parsed || process.env;
// const envKeys = Object.keys(env).reduce((prev, next) => {
//   prev[`process.env.${next}`] = JSON.stringify(env[next]);
//   return prev;
// }, {});

// module.exports = {
//   entry: `${_SOURCE}/index.jsx`,
//   output: _OUTPUT_CONFIG,
//   module: {
//     rules: [
//       _JS_JSX_RULES,
//       _SASS_CSS_RULES,
//       _IMAGE_RULES
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin({filename: 'styles.css'}),
//   ],
//   resolve: {
//     extensions: ['.webpack.js', '.web.js', '.js', '.json', '.jsx'],
//     modules: [_MODULES]
//   }
// }
