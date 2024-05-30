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
        //These error details can be sent to server for Logging , you can write side-effects here 
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

        if(this.state.hasError){
            return <div>Fallback Error Page</div>
        }
        return (
            <div>{this.props.children}</div>
        )
    }
}

export default ErrorBoundaryParent