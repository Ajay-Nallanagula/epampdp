import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();


    const handleLogoutBtnClick = async () => {
        logout({ returnTo: window.location.origin })
    }

    return (
        <button onClick={handleLogoutBtnClick}>Logout</button>
    )
}

export default LogoutButton