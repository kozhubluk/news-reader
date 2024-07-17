import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { InfoPage } from 'pages/InfoPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from "pages/ProfilePage";
import { ArticlePage } from "pages/Article";
import { NewsFeed } from "pages/NewsFeed";

enum Route {
    MAIN = 'main',
    INFO = 'info',
    NOT_FOUND = 'notFound',
    PROFILE = 'profile',
    NEWS_FEED = 'newsFeed',
    ARTICLE = 'article'
}

const RoutePaths: Record<Route, string> = {
    [Route.MAIN]: '/',
    [Route.INFO]: '/info',
    [Route.PROFILE]: '/profile',
    [Route.NEWS_FEED]: '/article',
    [Route.ARTICLE]: '/article/',
    [Route.NOT_FOUND]: '*'
}

export const routeConfig: Record<Route, RouteProps> = {
    [Route.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />
    },
    [Route.INFO]: {
        path: RoutePaths.info,
        element: <InfoPage />
    },
    [Route.PROFILE]: {
        path: RoutePaths.profile,
        element: <ProfilePage />
    },
    [Route.NEWS_FEED]: {
        path: RoutePaths.newsFeed,
        element: <NewsFeed/>
    },
    [Route.ARTICLE]: {
        path: `${RoutePaths.article}:id`,
        element: <ArticlePage/>
    },
    [Route.NOT_FOUND]: {
        path: RoutePaths.notFound,
        element: <NotFoundPage />
    },
}
