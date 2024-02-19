import { useRouter } from "next/router"

const ClientId = () => {
    const router = useRouter()
    console.log('ClientId', { router })
    const handleNavigate = () => {
        router.push('/client/max/routeOnClick')
    }

    return <div>
        <h1>ClientId</h1>
        <button onClick={handleNavigate}>Navigate From Here</button>
    </div>
}

export default ClientId