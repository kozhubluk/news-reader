import { lazy } from 'react'

export const ArticleAsync = lazy(async () => await import('./Article'))
