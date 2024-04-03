import Child from "./Child"
import ErrorBoundaryParent from "./ErrorBoundaryParent"

const Parent = ({ isError }) => {
    if (isError) {
       throw new Error('Error from Parent')
    }

    return (
        <ErrorBoundaryParent>
            <h1>Is Parent Component</h1>
            <Child isError={true} />
        </ErrorBoundaryParent>
    )
}

export default Parent