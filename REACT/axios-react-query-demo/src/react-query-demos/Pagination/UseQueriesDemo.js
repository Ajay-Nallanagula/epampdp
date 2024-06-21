import { useQueries } from "@tanstack/react-query"
import { getPaginatedProducts } from "../../axiosdemos/axiosMethods"
import { PaginationBar } from "./paginationDemo"
import { all } from "axios"

//NOTE THIS IS NOT AN EXAMPLE OF PAGINATION 

const UseQueriesDemo = () => {
    let productsPerPage = 10
    let pageNumbers = [1, 2, 3, 4]
   // const [currentPage, setCurrentPage] = useState(1)

    // const paginate = (pageNumber) => {
    //     // setCurrentPage((prevPageNumber) => {
    //     //     //queryClient.invalidateQueries(["products", prevPageNumber])
    //     //     return pageNumber
    //     // })
    //     setCurrentPage(pageNumber)
    // }

    //Parallel queries 
    const queriesResponse = useQueries({
        queries: pageNumbers.map(currentPage => {
            return {
                queryKey: ['products', currentPage],
                queryFn: async () => {
                    return await getPaginatedProducts(productsPerPage, currentPage)
                }
            }
        })
    })

    const allProducts = queriesResponse?.map(res => res.data?.products || []) || []
    //data?.products || []
    const products = allProducts.map(products => products.map(product => product.title)).flat()
    return (<div>
        UseQueries Demo

        <PaginationBar totalProducts={allProducts?.length} productsPerPage={productsPerPage} />

        {
            products.map(p => <div>{p}</div>)
        }
    </div>)
}

export default UseQueriesDemo