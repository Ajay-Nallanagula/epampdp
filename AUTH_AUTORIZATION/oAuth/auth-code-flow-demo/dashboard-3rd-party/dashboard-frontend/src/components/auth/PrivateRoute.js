import { useAuth0 } from "@auth0/auth0-react"
import { useNavigate } from "react-router-dom"

const PrivateRoute = (props) => {
    const auth0 = useAuth0()

    const navigate = useNavigate()

    if (!auth0.isAuthenticated) {
        return <div> <h2>Login is Required to View Challenges</h2></div>
    }

    return props.component

}

export default PrivateRoute