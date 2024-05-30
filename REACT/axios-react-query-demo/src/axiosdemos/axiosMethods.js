import axios from 'axios'
import productInstance from './axios-product-instance'


export const axiosCustomInstanceGet = async () => {
    //This is a Custom Instance , products baseUrl is configured
    const productInstanceResult = await productInstance.get('/products')
    console.log({ "GET-CUSTOM-INSTANCE": productInstanceResult })
}

export const axiosCustomInstancePost = async () => {
    //This is a Custom Instance , products baseUrl is configured
    const productInstanceResult = await productInstance.get('/products')
    console.log({ "GET-CUSTOM-INSTANCE": productInstanceResult })
}

export const axiosGet = async () => {
    const url = 'https://dummyjson.com/products'
    const result = await axios.get(url, {
        headers: {
            //You can set headers here
        }
    })
    console.log({ axiosGetResponse: result })



    return result.data.products
}

export const axiosPost = async (payload) => {
    const url = `https://dummyjson.com/users/add`
    const result = await axios.post(url, payload, {
        headers: {
            //You can set headers here
        }
    })
    //The result will contain following keys ['data', 'status', 'statusText', 'headers', 'config', 'request']
    console.log({ axiosPost: result })


    //This is a Custom Instance , products baseUrl is configured
    const productInstanceResult = productInstance.post('/users/add', payload)
    console.log({ "POST-CUSTOM-INSTANCE": productInstanceResult })

    return result.data
}

export const getPaginatedProducts = async (productsPerPage, currentPage) => {
    //https://dummyjson.com/products?limit=10&skip=10&select=title,price
    const { data } = await axios.get(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${(currentPage - 1) * productsPerPage}&select=title,price`)
    // setCurrentProducts(data.products)
    //setTotalProducts(data.total)
    return data
}