import { memo, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/route/route'

export const AppRoutes = memo(function AppRoutes() {
    return <Routes>
        {Object.values(routeConfig).map(value =>
            <Route key={value.path} path={value.path} element={
                <Suspense fallback={'loading'}>
                    {value.element}
                </Suspense>
            }></Route>
        )}
    </Routes>
})
