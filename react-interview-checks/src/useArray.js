// When array is used in React state, we need to deal with actions such as push and remove.
// Implement useArray() to make life easier.

import { useCallback, useState } from "react"

const useArray = (initialValue) => {
    const [state, setState] = useState(initialValue)

    const push = useCallback((items) => {
        setState((prevState) => ([...prevState, ...items]))
    }, [])

    const removeByIndex = useCallback((index) => {
        //We shd use useState because the new pushed array will not reflect here
        setState((prevState) => prevState.filter((_, i) => index !== i))
    }, [])

    return { value: state, push, removeByIndex }

}

export default useArray