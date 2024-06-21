import React, { useRef, useEffect, useState } from 'react';

export function useIsMounted() {
    const ref = useRef(false)

    useEffect(() => {
        ref.current = true
        return () => {
            console.log("Unmounting logic is executed!!!!")
            ref.current = false
        }
    }, [])

    return () => ref.current
}

function ComponentA({ unMount }) {
    const isMounted = useIsMounted();
    useEffect(() => {
        //   result.push(isMounted())
        //   request().then(() => {
        //     result.push(isMounted())
        //   })
        unMount()
    }, [])
    return <div>
        <p>Is ComponentA mounted : {JSON.stringify(isMounted())}</p>
        This is Component A
    </div>
}


const ComponentB = () => {
    return <div> This is Component B</div>
}

const App = () => {
    const [isComponentA, setIsComponentA] = useState(true)
    const isMounted = useIsMounted()

    return (
        <div>
            {/* <p>Is ComponentA mounted : {JSON.stringify(isMounted())}</p> */}
            {isComponentA && <ComponentA unMount={() => setIsComponentA(true)} />}
            {/* {!isComponentA && <ComponentB />} */}
            {/* <div>
                <button onClick={() => setIsComponentA((prevState) => !prevState)}>
                    UnMountComponent A
                </button>
            </div> */}
        </div>
    )
}

export default App