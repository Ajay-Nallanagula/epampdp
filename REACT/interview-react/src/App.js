import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
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
import Accordion from "./Accordion/AccordionBuilder/Accordion"
import TestRouter from "./routerQuestion/testRouter"
import Home from "./routerQuestion/components/Home"
import ComponentA from "./routerQuestion/components/ComponentA"
import ComponentB from "./routerQuestion/components/ComponentB"
import ChildComponentA from "./routerQuestion/components/ChildComponentA"
import BasicForm from "./Formik/BasicForm"
import ServiceUsage from "./ServiceUsage"
//import configRoutes from "./routerQuestion/testRouter"



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

    //const Router2 = TestRouter()

    return (
        <>
            <BrowserRouter>
                <ServiceUsage />
                {/* <BasicForm /> */}
                {/* <Router2 /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ComponentA" element={<ComponentA />}>
                        <Route path="ChildComponentA/:namer?" element={<ChildComponentA />} />
                    </Route>
                    <Route path="/ComponentB" element={<ComponentB />} />
                </Routes>
            </BrowserRouter>
            {/* <Accordion /> */}
            {/* <ThemeProvider>
                <ContextDemoComponent />
            </ThemeProvider> */}
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


