import { useQueryClient } from "@tanstack/react-query"

const PrefetchQueries = () => {
    const queryClient = useQueryClient()


    //NOTE THIS IS JUST DEMO CODE

    const handleMouseEnter = () => {
        //Usecase: Prefetch the data when idle, React-query will fetch the data when the browser 
        //state is idle 
        /*
        When you know or suspect that a certain piece of data will be needed, you can use prefetching to populate the cache with that data ahead of time, leading to a faster experience.
        There are a few different prefetching patterns:
        In event handlers   
        In components 
        Via router integration  
        During Server Rendering (another form of router integration)
        */
        queryClient.prefetchQuery({
            queryKey: ['blah', 'blah'],
            queryFn: async () => {
                await Promise.resolve({ "someData": "someData" })
            }
        })
    }

    return (<div>
        using PrefetchQueries
        <button onMouseEnter={handleMouseEnter}></button>
    </div>)
}

export default PrefetchQueries