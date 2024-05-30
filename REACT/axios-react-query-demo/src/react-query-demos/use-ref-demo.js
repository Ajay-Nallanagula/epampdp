import { useEffect, useRef, useState } from "react"

/*
Managing Focus, Text Selection, or Media Playback You use useRef to keep a mutable reference to an HTML element like an input or a video, for example, and then you can focus, select or play it, as well as manipulating other properties or methods available in native DOM elements.

Animation You can use useRef to hold a reference to an animation, for example, when using a third-party library like GSAP.

Adding a Container for Instance Variables If a certain value (state or props) is changing within components, usually if we need to access the latest state from an asynchronous callback, etc., we may need the useRef hook. The useRef Hook in React creates a mutable object whose .current property is passed as an argument (the initial value). It’s like a box that can hold a mutable value in its .current property.

Storing Immutable Values over Lifecycles of the Component If you want to store a value across re-renders but don’t want to cause a re-render when that value changes, then useRef is the tool for it. It’s like having a box in memory that holds any value you want to put into it while your component is mounted.

Interacting with Third-Party DOM Libraries There are many third-party libraries that operate directly on the DOM and useRef could be used to hold a reference to a DOM node for that library to manipulate.

Mocking Instance Methods for Functional Components Class components usually have instance methods, while functional components do not. However, in functional components, a useRef Hook can be used to mimic the same behavior.

Remember, although useRef can be a powerful tool, it’s important to use it sparingly and only when necessary, as direct manipulation of the DOM in React should generally be avoided.
*/


//Here the clearInterval value is saved  in stopRef across the re-renders caused by setState
//but when clear stopRef is used the component doesn't rerender

export const UseRefTimer = () => {
    const [timer, setTimer] = useState(0)
    const stopRef = useRef(null)

    useEffect(() => {
        stopRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () => clearInterval(stopRef.current)
    }, [timer])

    const handleStopTimer = () => {
        clearInterval(stopRef.current)
    }

    return (
        <div>
            <div ref={stopRef}> Timer Tick : {timer}</div>
            <button onClick={handleStopTimer}>Stop Ticking</button>
        </div>
    )
}


const UseRefDemo = () => {
    const refDemo = useRef(null)


    const handleOnMouseOver = () => {
        const demo = refDemo.current
        // console.log(demo.background)
        demo.style.background = "yellow";

    }
    const handleOnMouseLeave = () => {
        const demo = refDemo.current
        // console.log(demo.background)
        demo.style.background = "";

    }
    return (
        <>
            <div onMouseEnter={handleOnMouseOver} onMouseLeave={handleOnMouseLeave} ref={refDemo}>
                This is div shows useref-demo
            </div>
            <div nome="divNonRefDemo">
                This is div doesn't show useref-demo
            </div>
        </>
    )
}

export default UseRefDemo