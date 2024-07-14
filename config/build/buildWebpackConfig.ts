import type webpack from 'webpack'
import { buildResolve } from './buildResolve'
import { type BuildOptions } from '../types/buildOptions'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
    const { entry, output } = options.paths
    const { isDev } = options

    return {
        mode: options.mode,
        entry,
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolve(options),
        output: {
            filename: 'bundle.js',
            path: output,
            publicPath: '/',
            clean: true
        }
    }
}
