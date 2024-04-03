import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const LandingPage = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <>
            <h2>Landing Page</h2>
            <Button onClick={handleLogin}>Login</Button>
        </>
    )
}

export default LandingPage