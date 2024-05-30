import axios from "axios"


const axiosProductCancelRequest = async () => {
    const controller = new AbortController()
    const result = await axios.get('https://dummyjson.com/products', { signal: controller.signal })
    console.log(result)
    return controller

    //You would typically do is controller.abort()
}
export default axiosProductCancelRequest