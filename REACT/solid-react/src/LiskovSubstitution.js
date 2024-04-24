import { useState } from "react"

//Example 1:
// Button component
const SimpleButton = ({ text, onClick }) => (
    <button onClick={onClick}>
        {text}
    </button>
);

export { SimpleButton }

// LinkButton component that extends Button
const LinkButton = ({ text, url, onClick }) => (
    <Button onClick={onClick}>
        <a href={url}>{text}</a>
    </Button>
);

export { LinkButton };


// Example of using Button and LinkButton components
/*The LinkButton component was able to replace the Button component
 without affecting the behavior of the program. */

const MyComponent = () => (
    <div>
        <Button text="Click me!" onClick={() => console.log('Button clicked')} />
        <LinkButton text="Google" url="https://www.google.com" onClick={() => console.log('LinkButton clicked')} />
    </div>
);
export { MyComponent }

//Example 2:
const Button = (props) => {
    return <SimpleButton {...props}>{props.label}</SimpleButton>
}

const LoadingButton = (props) => {

    if (props.loading) {
        return <div>Loading.....</div>
    }

    return <SimpleButton {...props} />
}

const ButtonUsage = () => {
    const [loading, setLoading] = useState(true)

    const handleClick = () => {
        setLoading(!loading)
    }

    console.log(loading)
    return (
        <>
            <LoadingButton loading={loading}>{loading ? 'LoadingButton' : 'Button'}</LoadingButton>
            <button onClick={handleClick}>Liskov</button>
        </>
    )

}

export default ButtonUsage