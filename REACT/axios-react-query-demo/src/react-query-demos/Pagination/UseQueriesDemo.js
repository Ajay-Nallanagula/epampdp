import { useQueries } from "@tanstack/react-query"
import { getPaginatedProducts } from "../../axiosdemos/axiosMethods"

const UseQueriesDemo = () => {
    let productsPerPage = 10
    let pageNumbers = [1, 2, 3, 4]

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
        {
            products.map(p => <div>{p}</div>)
        }
    </div>)
}

export default UseQueriesDemo