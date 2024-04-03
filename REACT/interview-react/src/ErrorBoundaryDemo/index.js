import ErrorBoundaryParent from "./components/ErrorBoundaryParent"
import Parent from "./components/Parent"

const ErrorBoundaryApp = ({ isError }) => {

    return (
        <ErrorBoundaryParent>
            <Parent />
        </ErrorBoundaryParent>
    )
}

export default ErrorBoundaryApp