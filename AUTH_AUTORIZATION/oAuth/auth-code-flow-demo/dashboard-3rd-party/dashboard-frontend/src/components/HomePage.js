import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div>
            <ul>
                <li>
                    <span>Protected by PrivateRoute Component:</span>
                    <Link to="/challenges">  Challenges Page</Link>
                </li>
                <li>
                    <span>Protected by withAuthenticationRequired HOC from @auth0/auth0-react:</span>
                    <Link to="/about">  About Page</Link>
                </li>
                <li>
                    <span>HomePage is UNPROTECTED ROUTE </span>
                    <Link to="/">Home Page</Link>
                </li>
            </ul>


            <h2>Welcome to Home Page</h2>
        </div>
    )
}

export default HomePage