import { useEffect, useState } from "react"
import { axiosGet, getPaginatedProducts } from "../../axiosdemos/axiosMethods"
import Loader from '../Loader'
import axios from "axios"
import { useQuery, useQueryClient } from "@tanstack/react-query"

export const PaginationBar = ({ totalProducts, productsPerPage, paginate }) => {
    let pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {
                pageNumbers.map(pageNumber =>
                    <span key={pageNumber}>
                        <button onClick={() => paginate(pageNumber)}>{pageNumber}</button>
                    </span>)
            }

        </div>
    )

}

const PaginationDemo = () => {
    const productsPerPage = 10

    //const [totalProducts, setTotalProducts] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    //const [currentProducts, setCurrentProducts] = useState([])

    //const queryClient = useQueryClient()

    const paginatedProductsQuery = useQuery({
        queryKey: ["products", currentPage], //products_1: {}
        keepPreviousData: true,
        staleTime: 20000,
        //gcTime: 10000,
        queryFn: async () => {
            const data = await getPaginatedProducts(productsPerPage, currentPage)
            return data
        }

    })

    const currentProducts = paginatedProductsQuery?.data?.products || []
    const totalProducts = paginatedProductsQuery?.data?.total

    // useEffect(() => {
    //     const getAllProducts = async () => {
    //         //https://dummyjson.com/products?limit=10&skip=10&select=title,price
    //         const { data } = await axios.get(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${currentPage * productsPerPage}&select=title,price`)
    //         setCurrentProducts(data.products)
    //         setTotalProducts(data.total)
    //     }

    //     getAllProducts()
    // }, [currentPage])

    // if (products.length) {
    //     const lastIndex = currentPage * productsPerPage //20
    //     const startIndex = lastIndex - productsPerPage //20-10
    //     //currentProducts = products.slice(startIndex, lastIndex)
    // }

    const paginate = (pageNumber) => {
        // setCurrentPage((prevPageNumber) => {
        //     //queryClient.invalidateQueries(["products", prevPageNumber])
        //     return pageNumber
        // })
        setCurrentPage(pageNumber)
    }


    return (<>
        <div> All products </div>
        <ul>
            {
                currentProducts.map(currentProduct =>
                    <li key={currentProduct.id}>
                        {currentProduct.id} - {currentProduct.title}
                    </li>
                )
            }
        </ul>
        {totalProducts > 0 && <PaginationBar totalProducts={totalProducts} productsPerPage={productsPerPage} paginate={paginate} />}

    </>)


}

export default PaginationDemo