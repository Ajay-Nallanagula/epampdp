import {useEffect, useRef} from 'react'

const useUpdateEffect = (callBack) => {
    const firstRender = useRef(true)

    useEffect(() => {
        if(firstRender.current){
            firstRender.current = false
            return;
        }
        callBack()
    })
}

export default useUpdateEffect