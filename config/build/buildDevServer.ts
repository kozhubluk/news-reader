import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { type BuildOptions } from '../types/buildOptions'

export function buildDevServer ({ port }: BuildOptions): DevServerConfiguration {
    return {
        port,
        open: true,
        historyApiFallback: true
    }
}
