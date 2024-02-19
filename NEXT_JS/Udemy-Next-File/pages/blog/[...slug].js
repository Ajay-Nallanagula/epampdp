import { useRouter } from "next/router"


const CatchAllRoute = () => {
    const router = useRouter()
    console.log(router.query)
    return <div><h1>CatchAll Route</h1></div>
}

export default CatchAllRoute