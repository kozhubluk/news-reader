import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/route/route";

export const AppRoutes: React.FC = () => {
    return <Suspense>
        <Routes>
            {Object.values(routeConfig).map(value => <Route path={value.path} element={value.element}></Route>)}
        </Routes>
    </Suspense>
}