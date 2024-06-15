import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {InfoPage} from "pages/InfoPage";

enum Route {
    MAIN = 'main',
    INFO = 'info'
}

const RoutePaths: Record<Route, string> = {
    [Route.MAIN]: '/',
    [Route.INFO]: '/info'
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
}
