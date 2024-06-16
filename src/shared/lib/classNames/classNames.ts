type Mode = Record<string, boolean>

export function classNames (className: string, mode?: Mode, additional?: string[]): string {
    return [className, ...Object.entries(mode)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className), ...additional.filter(className => Boolean(className))].join(' ')
}
