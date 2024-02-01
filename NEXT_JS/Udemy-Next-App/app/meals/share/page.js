import Link from "next/link"

const Share = ({ params }) => {
    return (
        <>
            <label>This is Share Page</label>
            <h2><Link href='/'>Home</Link></h2>
        </>
    )
}

export default Share