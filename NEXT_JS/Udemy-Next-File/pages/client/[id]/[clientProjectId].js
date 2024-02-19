import { useRouter } from "next/router"

const SelectedClientProject = () => {
    const router = useRouter()
    console.log('SelectedClientProject', { router })
    return <div><h1>SelectedClientProject</h1></div>
}

export default SelectedClientProject