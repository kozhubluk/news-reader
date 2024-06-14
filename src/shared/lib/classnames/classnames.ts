type Mode = Record<string, boolean>

export function classnames(className: string, mode?: Mode, additional?: string[]): string {
    return [className, ...Object.entries(mode)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className), ...additional].join(' ');
}