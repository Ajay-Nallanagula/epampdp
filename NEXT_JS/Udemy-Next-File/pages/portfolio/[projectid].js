import { useRouter,/*withRouter //for Classbased */ } from "next/router"
const PortfolioProjectId = () => {
    const router = useRouter()
    console.log({ router })

    return <div><h2>ProjectId Place holder</h2></div>
}

export default PortfolioProjectId