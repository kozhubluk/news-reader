import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "../types/buildOptions";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.Configuration["plugins"] {
    return [new HtmlWebpackPlugin({
        filename: "index.html",
        template: paths.html
    }),
        new MiniCssExtractPlugin({
            filename: "styles/[name].css",
            chunkFilename: "[id].css",
        })]
}