import { BrowserRouter } from "react-router-dom"
import AuthProvider from "./Authentication/auth/AuthProvider"
import SimpleContainer from "./Authentication/components/SimpleContainer"
import AuthRoutes from "./Authentication/AuthRoutes"
import ErrorBoundaryApp from "./ErrorBoundaryDemo"
import React, { useDebugValue, useState } from "react"
import useUpdateEffect from "./useUpdateEffect"
import UseStateDemo from "./Hooks@18/USESTATE/UseStateDemo"
import UseDebugValueDemo from "./Hooks@18/useDebugValueDemo"
import ParentUseImperativeHandle from "./Hooks@18/UseImperativeHandleDemo"
import testService from "./TestService"


const App = () => {
    const [state, setState] = useState()
    useDebugValue(true ? "Online" : "Offline");
    const test = () => {
        console.log('testFunction')
    }
    useUpdateEffect(test)

    const handleClick = () => {
        setState(10)
    }


    return (
        <>
            <ParentUseImperativeHandle someService={testService} />
            {/* <UseStateDemo /> */}
            {/* <UseDebugValueDemo /> */}


            {/*  <BrowserRouter>
             <AuthProvider>
                 <SimpleContainer>
                     {<AuthRoutes />}
            
            <ErrorBoundaryApp />
        </SimpleContainer >
             </AuthProvider >
    </BrowserRouter > */}
            {/* < div > {state}
                < button onClick={handleClick} > Click Me</button >
            </div > */}
            {/* <ErrorBoundaryApp /> */}

        </>
    )
}

export default App


