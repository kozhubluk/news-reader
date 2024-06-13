import {ModuleOptions} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "../types/buildOptions";

export function buildLoaders({isDev}: BuildOptions): ModuleOptions["rules"] {
    const tsxLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {loader: "css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) =>  resourcePath.indexOf('.module') !== -1,
                        localIdentName: isDev? "[name]--[hash:base64:5]" : "[hash:base64:5]",
                    }
                }},
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return  [tsxLoader, styleLoader]
}