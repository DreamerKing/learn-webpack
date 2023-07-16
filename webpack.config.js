import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import toml from 'toml';
import yaml from 'yamljs';
import json5 from 'json5';

// import { mkdirSync, existsSync } from 'fs';

const __dirname = fileURLToPath(dirname(import.meta.url));

const distDir = resolve(__dirname, 'dist');

/* if (!existsSync(distDir)) {
  mkdirSync(distDir);
} */

// resolve() 回自动创建目录
// join() 仅是路径字符串拼接


export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: distDir,
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(jpe?g|png|svg|gif)$/i,
      type: 'asset/resource'
    }, {
      test: /\.(woff2?|ttf|eot|otf)$/i,
      type: 'asset/resource'
    }, {
      test: /\.[ct]sv$/i,
      use: 'csv-loader'
    }, {
      test: /\.xml$/i,
      use: 'xml-loader'
    }, {
      test: /\.toml$/i,
      type: 'json',
      parser: {
        parse: toml.parse
      }
    }, {
      test: /\.ya?ml$/i,
      type: 'json',
      parser: {
        parse: yaml.parse
      }
    }, {
      test: /\.json5$/i,
      type: 'json',
      parser: {
        parse: json5.parse
      }
    }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: true
  }
}
