export type Mode = 'development' | 'production';

export interface Paths {
    entry: string
    output: string
    html: string,
    src: string
}

export interface EnvOptions {
    mode: Mode
    port: number
}

export interface BuildOptions {
    mode: Mode
    isDev: boolean
    port: number
    paths: Paths
}