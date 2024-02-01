import Link from "next/link"

const DynamicSlug = ({ params }) => {
    return (
        <>
            <label>This coming from {params?.slug}</label>
            <Link href='/'><h2>Home</h2></Link>
        </>
    )
}

export default DynamicSlug