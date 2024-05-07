import { useRoutes } from "react-router-dom"
import Home from "./Pages/Home"
import Page1 from "./Pages/Page1"
import Page2 from "./Pages/Page2"
import Page3 from "./Pages/Page3"
import React, { Suspense } from "react"
import ChildPage1 from "./Pages/ChildPage1"

const LazyPage3 = React.lazy(() => import('./Pages/Page3'))

const Router = () => {
    const configRoutes = useRoutes([
        {
            path: '/',
            element: <Home />,

        },
        {
            path: '/Page1',
            element: <Page1 />,
            children: [
                {
                    path: 'ChildPage1',
                    element: <ChildPage1 />,
                }
            ]
        },
        {
            path: '/Page2',
            element: <Page2 />
        },
        {
            path: '/Page3',
            element: <Suspense fallback={"Loading"}><LazyPage3 /></Suspense>,
            //caseSensitive: true,
        },
    ])
    return configRoutes
}

export default Router