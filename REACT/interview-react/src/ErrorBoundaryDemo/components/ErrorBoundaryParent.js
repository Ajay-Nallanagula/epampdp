import React from 'react'

class ErrorBoundaryParent extends React.Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        //This method is used to render a fallback UI after an error has been thrown.
        return { hasError: !!error }
    }

    componentDidCatch(error, info) {
        console.log({ error }, { info })
    }

    render() {

        // if (this.state.hasError) {
        //     try {
        //         throw new Error('From Boundary')
        //     }
        //     catch {
        //         return (
        //             <div>{this.props.children}</div>
        //         )
        //     }
        // }
        return (
            <div>{this.props.children}</div>
        )
    }
}

export default ErrorBoundaryParent