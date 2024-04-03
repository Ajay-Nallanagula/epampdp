import ErrorBoundaryParent from "./ErrorBoundaryParent"

const GrandChild = ({ isError }) => {
    if (isError) {
        throw new Error('Error from GrandChild')
    }

    return (
        <ErrorBoundaryParent>
            <h1>Is GrandChild Component</h1>
        </ErrorBoundaryParent>
    )
}

export default GrandChild