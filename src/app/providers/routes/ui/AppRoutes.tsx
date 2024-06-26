import { memo, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/route/route'

export const AppRoutes = memo(function AppRoutes() {
    return <Suspense>
        <Routes>
            {Object.values(routeConfig).map(value => 
                <Route key={value.path} path={value.path} element={value.element}></Route>)}
        </Routes>
    </Suspense>
})
