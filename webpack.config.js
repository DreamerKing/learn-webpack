import { resolve, dirname } from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(dirname(import.meta.url))

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({
    title: "learn webpack"
  })]
}
