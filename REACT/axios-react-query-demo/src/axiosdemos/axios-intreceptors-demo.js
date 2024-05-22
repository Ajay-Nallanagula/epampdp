import axios from "axios";

//Request Interceptor
const requestInterceptor = axios.interceptors.request.use((request) => {
    request.headers["Added-From-InterCeptor"] = "ADDED-FROM-INTERCEPTOR"
    console.log(request.url)
    console.log("This is a request Interceptor")
    return request
}, (error) => {
    console.error(error)
})

//You can unsubscribe or remove interceptors like below
//axios.interceptors.request.eject(requestInterceptor)

//Response Interceptor 
const responseInterceptor = axios.interceptors.response.use((response) => {
    console.log({ response })
    console.log("This is a response Interceptor")
    return response
}, (error) => {
    console.error(error)
    if (error.response.status === "401") {
        console.log("Add Refresh Token logic here ")
    }
})

export { requestInterceptor, responseInterceptor }

//You can unsubscribe or remove interceptors like below
//axios.interceptors.response.eject(responseInterceptor)