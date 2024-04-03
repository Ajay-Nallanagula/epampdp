import ErrorBoundaryParent from "./ErrorBoundaryParent"
import GrandChild from "./GrandChild"

const Child = ({ isError }) => {
    if (isError) {
        // try {
        //     throw new Error('Error from Child')
        // } 
        // catch (error) {
        //     <h1>Is Child Component</h1>
        //     return <GrandChild />
        // }
        throw new Error('Error from Child')
    }

    return (
        <ErrorBoundaryParent>
            <h1>Is Child Component</h1>
            <GrandChild />
        </ErrorBoundaryParent>
    )
}

export default Child