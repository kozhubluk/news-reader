import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildOptions, EnvOptions} from "./config/types/buildOptions";
import path from "path";

export default function (env: EnvOptions): webpack.Configuration {
    const port = env.port ?? 3000;
    const mode = env.mode ?? 'development';

    const options: BuildOptions = {
        mode,
        isDev: mode === 'development',
        port,
        paths: {
            entry: path.resolve(__dirname, 'src', "index.tsx"),
            output: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src')
        }
    }

    return  buildWebpackConfig(options);
};