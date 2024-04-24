import { BrowserRouter } from "react-router-dom"
import AuthProvider from "./Authentication/auth/AuthProvider"
import SimpleContainer from "./Authentication/components/SimpleContainer"
import AuthRoutes from "./Authentication/AuthRoutes"
import ErrorBoundaryApp from "./ErrorBoundaryDemo"
import React, { useDebugValue, useState, Profiler } from "react"
import useUpdateEffect from "./useUpdateEffect"
import UseStateDemo from "./Hooks@18/USESTATE/UseStateDemo"
import UseDebugValueDemo from "./Hooks@18/useDebugValueDemo"
import ParentUseImperativeHandle from "./Hooks@18/UseImperativeHandleDemo"
import testService from "./TestService"
import ProfileApp from "./Profiler/ProfileApp"
import { ThemeProvider } from "@emotion/react"
import ContextDemoComponent from "./ContextDemo/ContextDemoComponent"



const App = () => {
    // const [state, setState] = useState()
    // useDebugValue(true ? "Online" : "Offline");
    // const test = () => {
    //     console.log('testFunction')
    // }
    // useUpdateEffect(test)

    // const handleClick = () => {
    //     setState(10)
    // }

    const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
        console.log({ id }, { phase }, { actualDuration: actualDuration + ' milliSeconds' }, { baseDuration: baseDuration + ' milliSeconds' }, { startTime: startTime + ' milliSeconds' }, { commitTime: commitTime + ' milliSeconds' })
    }

    
    return (
        <>
            <ThemeProvider>
                <ContextDemoComponent />
            </ThemeProvider>
            {/* <Profiler id="ProfileApp" onRender={onRender}>
                <ProfileApp />
            </Profiler> */}
            {/* <ParentUseImperativeHandle someService={testService} /> */}
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


