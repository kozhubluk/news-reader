declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default content
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'

declare let IS_DEV: boolean
