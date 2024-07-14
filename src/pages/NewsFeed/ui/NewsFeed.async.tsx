import { lazy } from 'react'

export const NewsFeedAsync = lazy(async () => await import('./NewsFeed'))
