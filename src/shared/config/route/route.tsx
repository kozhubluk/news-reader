import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { InfoPage } from 'pages/InfoPage'
import { NotFoundPage } from 'pages/NotFoundPage'

enum Route {
    MAIN = 'main',
    INFO = 'info',
    NOT_FOUND = 'notFound'
}

const RoutePaths: Record<Route, string> = {
    [Route.MAIN]: '/',
    [Route.INFO]: '/info',
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
    [Route.NOT_FOUND]: {
        path: RoutePaths.notFound,
        element: <NotFoundPage/>
    }
}
