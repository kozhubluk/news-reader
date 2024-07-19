export enum BlockType {
    TEXT = 'text',
    QUOTE = 'quote',
    IMAGE = 'image',
    SUBTITLE = 'subtitle'
}

interface Block {
    id: string
    type: BlockType
}

export interface ArticleText extends Block{
    paragraphs: string[]
}

export interface ArticleImage extends Block {
    src: string
    text?: string
    subtitle?: string
}

interface ArticleSubtitle extends Block {
    text: string
}

export type ArticleBlock = ArticleSubtitle | ArticleText | ArticleImage

export interface Article {
    id: string
    title: string
    tags: string[]
    date: string
    views: number
    blocks: ArticleBlock[]
}

export interface ArticleSchema {
    article?: Article,
    isLoading: boolean
    error?: string
}

