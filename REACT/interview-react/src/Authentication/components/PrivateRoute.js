import { Outlet, useNavigate } from "react-router-dom"
import { useAuthContext } from "../auth/AuthContext"
import SimpleContainer from "./SimpleContainer"

const PrivateRoute = () => {
    const context = useAuthContext()
    const token = context.token
    const navigate = useNavigate()
    if (token) {
        return <Outlet />
    }

    return navigate('/login')
}

export default PrivateRoute