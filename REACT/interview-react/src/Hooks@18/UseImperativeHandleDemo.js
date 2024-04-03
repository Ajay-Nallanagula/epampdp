import { forwardRef, useImperativeHandle, useRef, useState } from "react"
const ParentUseImperativeHandle = () => {
    const inputRef = useRef('')
    const [txt, setTxt] = useState('')
    console.log(inputRef.current)

    const handleClick = () => {
        inputRef.current.focus()
        console.log(inputRef.current.sayHello())
    }

    return (
        <>
            <div>
                <h2> This is a Parent Component</h2>
                <h3>Text Value {txt}</h3>
            </div>
            <div>
                <Child ref={inputRef} /> <br />
                <button onClick={handleClick}>Show Text Value</button>
            </div>
        </>
    )
}
const Child = forwardRef((_props, ref) => {
    const childRef = useRef('')
    useImperativeHandle(ref, () => {
        return {
            focus() {
                childRef.current.focus();
            },
            scrollIntoView() {
                childRef.current.scrollIntoView();
            },
            sayHello() {
                childRef.current.helloMsg = "Say ehllo Custom Message"
                return childRef.current.helloMsg
            }

        }
    }, [])


    return (
        <>
            <div>
                <h3> This is a Child Component</h3>
            </div>
            <div>
                <label for="inpDemo">Enter Text</label>
                <input id="inpDemo" type="text" ref={childRef}></input>
            </div>
        </>
    )
})
export default ParentUseImperativeHandle