export enum BlockType {
    TEXT = 'text',
    QUOTE = 'quote',
    IMAGE = 'image',
    SUBTITLE = 'subtitle'
}

interface Block {
    id: string
    type: BlockType
    text?: string
    src?: string
}

export interface Article {
    id: string
    title: string
    tags: string[]
    date: string
    views: number
    blocks: Block[]
}

export interface ArticleSchema {
    article?: Article,
    isLoading: boolean
    error?: string
}

