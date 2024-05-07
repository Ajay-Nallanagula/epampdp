import { Link, Outlet } from "react-router-dom"

const Page1 = () => {
    return (
        <>
            <div>This is Page 1</div>
            <Link to='/Page1/ChildPage1'>ChildPage1</Link>
            <Outlet/>
        </>
    )
}

export default Page1