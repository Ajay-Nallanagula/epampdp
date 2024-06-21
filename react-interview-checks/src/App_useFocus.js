// function App() {
//     const [ref, isFocused] = useFocus()
//     return <div>
//       <input ref={ref}/>
//       {isFocused && <p>focused</p>}
//     </div>
//   }

import { useEffect, useRef, useState } from "react"



const useFocus = () => {
    const ref = useRef(null)
    const [isFocused, setIsFocused] = useState(false)
    useEffect(() => {
        const currentElement = ref.current
        // if (document.activeElement === currentElement) {
        //     setIsFocused(true)
        // } else {
        //     setIsFocused(false)
        // }

        const onFocus = () => setIsFocused(true)
        const onBlur = () => setIsFocused(false)

        currentElement.addEventListener('focus', onFocus)
        currentElement.addEventListener('blur', onBlur)

        return () => {
            currentElement.removeEventListener('focus', onFocus)
            currentElement.removeEventListener('blur', onBlur)
        }

    }, [ref.current])
    return [ref, isFocused]
}


const App = () => {
    // const [ref, isFocused] = useFocus()
    // return <div>
    //     <input ref={ref} />
    //     {isFocused && <p><b>Alert!! focused</b></p>}
    // </div>

    const [ref, isFocused] = useFocus()
    const [refTarget, setRefTarget] = useState(0)
    return (
        <div>
            <p>{isFocused ? 'focused' : 'not focused'}</p>
            <p>refTarget:{refTarget}</p>
            <button
                data-testid="change-ref-target-button"
                onClick={() => {
                    setRefTarget((target) => (target + 1) % 2)
                }}
            >
                toggle ref target
            </button>
            <input ref={refTarget === 0 ? ref : null} data-testid="focus-target0" />
            <input ref={refTarget === 1 ? ref : null} data-testid="focus-target1" />
        </div>
    )
}

export default App