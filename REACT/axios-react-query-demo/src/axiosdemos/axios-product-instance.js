import axios from "axios";

const productInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        "AAAA-BBBB-CCCC": "Product/WASHINGMACINE, Product/VACCUMCLEANER"
    }
})

const productRequestInterceptor = productInstance.interceptors.request.use((request) => {
    //Do some logic here
    return request
}, (error) => {
    const config = error.config
    return error
})

const productResponseInterceptor = productInstance.interceptors.response.use((response) => {
    //Do some logic here
    return response
}, (error) => {
    //Do some validation and act appropriately
    const config = error.config
    return error
})

productInstance.interceptors.request.eject(productRequestInterceptor)
productInstance.interceptors.response.eject(productResponseInterceptor)

export default productInstance