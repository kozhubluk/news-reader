export type Mode = Record<string, boolean | undefined>

export function classNames (className: string, mode: Mode = {}, additional: Array<string | undefined> = []): string {
    return [className, ...Object.entries(mode)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className), ...additional
        .filter(className => Boolean(className))].join(' ')
}
