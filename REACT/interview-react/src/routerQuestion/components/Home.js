import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <div>Home component</div>
            <Link to="/ComponentA">Component A</Link>
            <Link to="/ComponentB">Component B</Link>
        </>
    )
}

export default Home