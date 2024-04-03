import { Route, Routes } from "react-router-dom"
import LandingPage from "../components/LandingPage"
import LoginForm from "../components/LoginForm"
import PrivateRoute from "../components/PrivateRoute"
import Dashboard from "../components/Dashboard"
{/* <Routes>
                        <Route path='/' element={<LandingPage />} />
                        <Route path='/login' element={<LoginForm />} />
                        <Route element={<PrivateRoute />}>
                            <Route path='/Dashboard' element={}></Route>
                        </Route>
                    </Routes> */}


const AuthRoutes = () => {
    const routePaths = [
        { path: '/', element: <LandingPage /> },
        { path: '/login', element: <LoginForm /> },
        { element: <PrivateRoute />, children: { path: '/Dashboard', element: <Dashboard /> } },
    ]

    return (
        <Routes>
            {
                routePaths.map(item => {
                    if (item.children) {
                        return (
                            <Route element={item.element}>
                                <Route path='/Dashboard' element={item.element}></Route>
                            </Route>
                        )
                    }
                    return <Route path={item.path} element={item.element} />
                })
            }
        </Routes>
    )
}

export default AuthRoutes 