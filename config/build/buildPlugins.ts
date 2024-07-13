import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { type BuildOptions } from '../types/buildOptions'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins (options: BuildOptions): webpack.Configuration['plugins'] {
    const { paths, isDev } = options
    const plugins = [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: paths.html
    }),
    new MiniCssExtractPlugin({
        filename: 'styles/[name].css',
        chunkFilename: '[id].css'
    }),
    new webpack.DefinePlugin({
        IS_DEV: JSON.stringify(options.isDev)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
        openAnalyzer: true
    })
    ]

    if (isDev) {
        plugins.push(new ReactRefreshPlugin())
    }

    return plugins
}
