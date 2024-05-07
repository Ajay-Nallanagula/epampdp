import { useParams } from "react-router-dom"

const ChildComponentA = () => {
    const params = useParams()
    console.log(params["namer"])
    return <div>ChildComponentA - {params["namer"]}</div>
}

export default ChildComponentA