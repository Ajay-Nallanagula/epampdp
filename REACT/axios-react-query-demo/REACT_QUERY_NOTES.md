https://tanstack.com/query/latest/docs/framework/react/overview

https://www.youtube.com/watch?v=r8Dg0KVnfMA

What is tanstack/react-query?
data-fetching library for web applications, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your web/react applications a breeze

There are only two hard things in Programming
--> Naming the variables
--> Invalidating the cache

What Problem does React-Query Solve?
Data Caching: React Query automatically caches data in-memory and reduces unnecessary network calls. Thus, the application becomes faster and provides a smooth user experience.
Automatic Refetching: The library enables automatic updates from the server every time the user switches tabs or comes online after being offline.

Pagination and Infinite Queries: React Query supports pagination and infinite loading features.
Syncing Multiple Tabs: React Query provides real-time synchronization and avoids data inconsistencies.
Devtools: React Query provides a powerful developer toolset to debug and manipulate cache data.
Reduces the Boilerplate Code: With its global level cache management, it eliminates the need for asynchronous data fetching and state management.
Error and Loading State Management: The library has built-in error and loading state management.
Garbage Collection: React Query automatically garbage collects data that is not being used.
Essentially, it simplifies fetching, caching, syncing, and background updates in React applications, making it easier to handle real-time data coming from APIs. This can reduce the complexity and amount of code written, making applications more maintainable and performant.


The two things that you can do with React-Query are 
--> Query --> useQuery
--> Mutation --> useMutation

useQuery:
--------
What is querykey? Why do we use querykey in useQuery?
At its core, TanStack Query manages query caching for you based on query keys. Query keys have to be an Array at the top level, and can be as simple as an Array with a single string, or as complex as an array of many strings and nested objects. As long as the query key is serializable, and unique to the query's data, you can use it!

Examples of Query Key 

<domain>/products/1 ==> queryKey: ['products','id']
<domain>/products?search=hello ==> queryKey: ['products',{search:'searchId'}]

Data Caching: React Query automatically caches data in-memory and reduces unnecessary network calls. Thus, the application becomes faster and provides a smooth user experience.

Consider a Scenario: You are on on and off poor internet connection , switching between the tabs 
NO-REACT-QUERY: As soon as the component loads , there is a fetch call for data the data is loaded
WITH-REACT-QUERY: React query will fetch the data automatically when the data is stale , if the stale-data is cached it will show the stale data to user and once in the background the fetch data is finished it loads the data , better user-experience 
Automatic Refetching: The above scenario illustrates , The library enables automatic updates from the server every time the user switches tabs or comes online after being offline.
You can see all these fetch statues in 
productsQuery.fetchStatus = fetching/idle/paused
idle: if you are not fetching or already fetched
fetching: whne fetch is goin on 
paused: when you are offline

Scenario : As soon as you fetch the data, the data is set "stale" mode, this is default behaviour of the React-Query. In cas you want to change it we can do set the default options 
const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } } })

 OR 
We can also give it at individual Query Level:
  const productsQuery = useQuery({
        queryKey: ['products'],
        staleTime:1000*60*5, //****
        queryFn: async (obj) => {})


Scenario: Consider Stock Market scenario, you need to refetch the data at every second in that case we can use "refetchInterval" on useQuery , which will refetch the data every second 
const productsQuery = useQuery({
        queryKey: ['products'],
        refetchInterval:1000, //**** fetches data every second
        queryFn: async (obj) => {})


Scenario: Consider you have two two functionalites 
funcionlaity 1: You need to get a product details with specific id say 101 its a query
functionality 2: You need to update/change the product details and submit the product, its a mutation 
functionality 2 depends on functionality 1
functionality 2 should not execute unless functionality 1 is complete 

Query Retries:
https://tanstack.com/query/latest/docs/framework/react/guides/query-retries
retry: 3 //BY DEFAULT
retry: (failureCount, error) => {....Write your custom logic }

Parallel Queries :
Parallel queries using LazyLoading/Suspense , this will not work . We need to use special hool called "useSuspenseQueries"/ useInfiniteQueries
Dynamic Parallel Queries: "useQueries", read more on it 

Pagination using React-Query:
https://tanstack.com/query/latest/docs/framework/react/guides/paginated-queries





What is queryFn?





useMutation:
-----------