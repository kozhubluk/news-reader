import webpack from "webpack";

export function buildResolve(): webpack.Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}