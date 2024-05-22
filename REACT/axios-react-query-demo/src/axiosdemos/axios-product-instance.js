import axios from "axios";

const productInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        "AAAA-BBBB-CCCC": "Product/WASHINGMACINE, Product/VACCUMCLEANER"
    }
})

export default productInstance