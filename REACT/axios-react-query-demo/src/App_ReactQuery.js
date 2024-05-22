import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import Loader from "./react-query-demos/Loader"
import ErrorPage from "./react-query-demos/ErrorPage"
import { DEMOS } from "./react-query-demos/constants"
import { axiosPost } from "./axiosdemos/axiosMethods"

const AppReactQuery = ({ demoLabel = '' }) => {

    // if (DEMOS.useQueryDemo === demoLabel) {
    //     return <ReactUseQueryDemo />
    // }

    //return <ReactUseMutationDemo />

    return <ReactQueryEnabledDemo productId={1} />
}

const ReactUseQueryDemo = () => {
    const productsQuery = useQuery({
        queryKey: ['products'],
        //staleTime:1000*60*5,
        //  refetchInterval: 1000,
        queryFn: async (obj) => {
            /*
            console.log(`queryFn Object`, obj)
            console.log({ queryKey: obj.queryKey })
            console.log('Products are fetched!!')
            */
            //throw Error('Products Data Fetch Error')
            return await axios.get('https://dummyjson.com/products')
        }
    })

    //    productsQuery.fetchStatus = ""
    if (productsQuery.isLoading) {
        return <Loader />
    }

    if (productsQuery.isError) {
        return <ErrorPage error={productsQuery.error} />
    }

    return <div>
        <ul>
            {
                productsQuery.data.data.products.map(product => <li key={product.id}>{product.id}: {product.title}</li>)
            }
        </ul>
    </div>
}

const ReactUseMutationDemo = () => {
    const queryClient = useQueryClient()
    const productMutationResponse = useMutation({
        mutationFn: async (payload) => {
            //const payload = { userId: crypto.randomUUID, userName: 'AjayNallanagula' }
            //return await addusers(payload)
            return await axiosPost(payload)
        },
        //data : is the response of mutation
        //variables: is the payload that you pass in "mutationFn"
        //context: check--> "onMutate" function , if that returns anything that will be context
        onSuccess: (data, variables, context) => {
            console.log(`Successfully Mutated`, data, context)
            //Invalidate the cache to show up the latest results and re-cache the response
            queryClient.invalidateQueries(['products'])
        },
        onError: (data, variables, context) => {

        },

        //Even before you want to do some data tarnsformations before executionof 
        //"mutationfn", this is the place to be done 
        //*** NOTE: If there is a error in Mutation, there will not be any "RETRY" at all.
        onMutate: (variables) => {
            console.log(`Object is about to get Mutated`, variables)
            return { context: "THIS WILL BE LOGGED AS 'context' in onSuccess" };
        },
        //You use onSettled when you are using Promise calls , where the promise can resolve to
        //data or error 
        //context: check--> "onMutate" function , if that returns anything that will be context
        onSettled: (data, error, variable, context) => {
            console.log(`Object is Settled`, { data }, { error }, { variables })
        }

    })

    if (productMutationResponse.isLoading) {
        return <Loader />
    }

    if (productMutationResponse.isError) {
        return <ErrorPage error={productMutationResponse.error} />
    }


    return <div>
        <div>{JSON.stringify(productMutationResponse?.data)}</div>

        <button onClick={() => productMutationResponse.mutate({ userId: crypto.randomUUID(), userName: 'AjayNallanagula' })}>POST DATA</button>
    </div>
}

const ReactQueryEnabledDemo = ({ productId }) => {
    const queryResponse = useQuery({
        queryKey: ["product", "id"],
        queryFn: async () => {
            return await axios.get("https://dummyjson.com/products/" + productId)
        }
    })

    const mutationResponse = useMutation({
        enabled: queryResponse?.data?.data?.title?.length > 0,
        mutationFn: async (productId) => {
            return await axios.put(
                `https://dummyjson.com/products/${productId}`
                , { title: 'iPhone Galaxy +1' }
                , {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
        }
    })

    console.log(mutationResponse)
    //DANGER : Will end up in infinite loop
    //productMutationResponse.mutate(productId)

    const handlePutClick = () => {
        mutationResponse.mutate(productId)
    }


    if (queryResponse.isLoading) {
        return <Loader />
    }

    if (queryResponse.isError) {
        return <ErrorPage error={queryResponse.error} />
    }

    return (
        <div>
            {JSON.stringify(mutationResponse?.data?.data || {})}
            <br></br>
            <button onClick={handlePutClick}>Update Product</button>
        </div>
    )
}


export default AppReactQuery