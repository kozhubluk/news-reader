import { type ModuleOptions } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from '../types/buildOptions'

export function buildLoaders ({ isDev }: BuildOptions): ModuleOptions['rules'] {
    const tsxLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resourcePath: string) => resourcePath.includes('.module'),
                        localIdentName: isDev ? '[name]--[hash:base64:5]' : '[hash:base64:5]'
                    }
                }
            },
            // Compiles Sass to CSS
            'sass-loader'
        ]
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    const babelLoader = {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: {
                    plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
                },
            },
        ],
    }

    return [tsxLoader, styleLoader, svgLoader, fileLoader]
}
