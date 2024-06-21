/*
Implement useUpdateEffect() that it works the same as useEffect() 
except that it skips running the callback 
on first render.

useEffect(() => {
    
},[dependency array])

useUpdateEffect(() => {
    fn()

    
},[dependency array])


*/

import { useEffect, useRef } from "react";

function useUpdateEffect(callback, []) {

    const ref = useRef(false)
    if (ref.current) {
        const cleanup = callback()
        if (typeof cleanup === 'function') {
            cleanup()
        }
    }
    ref.current = true
    return

}


export default function useUpdateEffect2(callback, depArray = []) {
    const ref = useRef(false)
    useEffect(() => {
        if (!ref.current) {
            return () =>{}
        } else {
            ref.current = true
        }
           
        const cleanupCallback = callback()
        return cleanupCallback
    }, depArray)




}