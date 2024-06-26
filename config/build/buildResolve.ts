import type webpack from 'webpack'
import { type BuildOptions } from '../types/buildOptions'

export function buildResolve ({ paths: { src } }: BuildOptions): webpack.Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [src, 'node_modules'],
        preferAbsolute: true,
        mainFiles: ['index'],
        alias: {}
    }
}
