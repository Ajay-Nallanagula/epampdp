import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = () => {
    // const navigate = useNavigate()
    const { loginWithRedirect, isAuthenticated } = useAuth0()

    const handleLoginBtnClick = async () => {
        // await authService.login()
        // navigate("/challenges")

        const loginRedirectOptions = { screen_hint: 'signup' }
        loginWithRedirect()
    }

    return (
        <button onClick={handleLoginBtnClick}>Login</button>
    )
}

export default LoginButton