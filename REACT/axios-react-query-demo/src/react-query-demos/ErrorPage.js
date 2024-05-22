const ErrorPage = ({ error }) => {

    return (
        <div>
            <div> <h3>{error.message}</h3></div>
            <div>{JSON.stringify(error)}</div>
        </div>
    )

}

export default ErrorPage