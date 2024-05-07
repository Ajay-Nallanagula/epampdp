import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <div>This is Home</div>
            <nav>
                <Link to='/Page1'>Page 1</Link>
                <Link to='/Page2'>Page 2</Link>
                <Link to='/Page3'>Page 3</Link>
            </nav>
        </>
    )
}

export default Home