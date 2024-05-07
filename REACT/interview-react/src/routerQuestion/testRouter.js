/*
Coding task Build React app with Routing --> Two Components A and B.
 Add Navigation with four links and onclick route to respective components.
 Follow up questions what if we have captialletters in route path. 
 How browser treats that. how to prevent that.

*/

import { useRoutes } from "react-router-dom"
import ComponentA from "./components/ComponentA"
import ComponentB from "./components/ComponentB"
import Home from "./components/Home"

const TestRouter =  () =>{
    const configRoutes = useRoutes([
        {path:'/', element:<Home/>},
        {path:'/componentA', element:<ComponentA/>},
        {path:'/componentB', element:<ComponentB/>},
    ])

    return configRoutes
}

export default TestRouter