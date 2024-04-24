import React, { useState } from "react";
import "./App.css";
import CtorComponent from "./lifecyclemethodsandhooks/CtorComponent";
import ComponentDidMountDemo from "./lifecyclemethodsandhooks/ComponentDidMountDemo";
import ComponentDidMountMultipleParent from "./lifecyclemethodsandhooks/ComponentDidMountMultipleParent";
import ComponentDidMountAPI from "./lifecyclemethodsandhooks/ComponentDidMountAPI";
import PortalParent from "./lifecyclemethodsandhooks/PortalParent";
import ComponentGetDerivedStateFromPropsParent from "./lifecyclemethodsandhooks/ComponentGetDerivedStateFromPropsParent";
import {
  Car,
  Bike,
  TruckWay1,
  TruckWay2,
} from "./lifecyclemethodsandhooks/ComponentInheritance";
import { Car1, Bike1, TruckWay11 } from "./lifecyclemethodsandhooks/ComponentComposition";
import RenderEg from "./lifecyclemethodsandhooks/RenderEg";
import ParentClass from "./HOOKS/ParentClass";
import ComponentDidUpdateParent from "./lifecyclemethodsandhooks/ComponentDidUpdateParent";
import ComponentShouldComponentUpdateParent from "./lifecyclemethodsandhooks/ComponentShouldComponentUpdateParent";
import ComponentShouldComponentUpdate from "./lifecyclemethodsandhooks/ComponentShouldComponentUpdate";
import ComponentDidUpdateDemoParent from "./lifecyclemethodsandhooks/ComponentDidUpdateDemoParent";
import ComponentWillUnMountDemo from "./lifecyclemethodsandhooks/ComponentWillUnMountDemo";
import ParentForContext from "./CONTEXT/ParentForContext";
import SimplifyShouldComponentUpdate from "./lifecyclemethodsandhooks/SimplifyShouldComponentUpdate";
import ComponentDidUpdateDOM from "./lifecyclemethodsandhooks/ComponentDidUpdateDOM";
import ParentMemo from "./MEMO/ParentMemo";
import ParentRef from "./REF/ParentRef";
// import FreelanceTrial from './FreelanceTrial'
import * as moment from 'moment'
import { ParentReducerHook } from './REDUCERDEMO'
import { RoutingDemo } from './ROUTING'
import { RoutingDemoNested } from './ROUTING'
import { BrowserRouter as Router } from 'react-router-dom'
import NestedRoutes from './ROUTING/NestedRoutes/NestedRoutes'
import CodeSplitComponent1 from './CODESPLITTING/CodeSplittingDemo'
import CodeSplittingRouteDemo from "./CODESPLITTING/CodeSplittingRouteDemo";
import ErrorBoundaryApp from "./ERRORBOUNDARIES/ErrorBoundaryApp";
import ThemeComponent1 from "./CONTEXT/THEMECONTEXT/ThemeComponent1";
import ThemeProvider from "./CONTEXT/THEMECONTEXT/ThemeProvider";
import ThemeComponent2 from "./CONTEXT/THEMECONTEXT/ThemeComponent2";
import HookUseStateTimer from "./HOOKS/USESTATE/hookUseStateTimer";
import CountInputChanges from "./HOOKS/USESTATE/challenge2";
import Interview from "./INTERVIEW/interview";
function App() {

  return (

    <Router>
      <div className="App">
        <ErrorBoundaryApp />
        {/* <Interview /> */}
        {/* <HookUseStateTimer /> */}
        {/* <CountInputChanges /> */}
        {/* <ThemeProvider>
          <ThemeComponent1 />
          <ThemeComponent2 />
        </ThemeProvider> */}
        {/*<CodeSplitComponent1/>*/}
        {/* {<CodeSplittingRouteDemo />} */}
        {/* <RoutingDemo/> */}
        {/* <RoutingDemoNested/> */}
        {/*<NestedRoutes/>*/}
        {/* <ParentReducerHook/> */}
        {/* <ParentRef/> */}
        {<ParentMemo />}
        {/*<ParentForContext/>*/}
        {/* <ComponentWillUnMountDemo/>*/}
        {/* { <ComponentDidUpdateParent/> } */}
        {/* <ParentClass/>  */}
        {/* <ComponentShouldComponentUpdate/> */}
        {/*<ComponentDidUpdateDemoParent />*/}
        {/* <ComponentShouldComponentUpdateParent /> */}
        {/* <RenderEg/> */}
        {/* {<CtorComponent name='Ajay Nallanagula' />} */}
        {/*<ComponentDidMountDemo label='VASISHT NALLANAGULA'/>*/}
        {/* {<ComponentDidMountMultipleParent />} */}
        {/* {<ComponentDidMountAPI/>} */}
        {/* <PortalParent/>*/}
        {/*<ComponentGetDerivedStateFromPropsParent/>*/}
        {/* <SimplifyShouldComponentUpdate/>*/}
        {/*<ComponentDidUpdateDOM/> */}
        {/* <div> COMPONENT INHERITANCE</div>
    <Car>This is a CAR</Car>
    <Bike>This is a BIKE</Bike>
    <TruckWay1>This is a TRUCK</TruckWay1>
    <TruckWay2>This is a TRUCK</TruckWay2>

    <div> COMPONENT COMPOSITION</div>
    <Car1>This is a CAR</Car1>
    <Bike1>This is a BIKE</Bike1>
    <TruckWay11>This is a TRUCK<span>This is Heavy Vehicle</span></TruckWay11>*/}
      </div>
      <div id="portal"></div>
    </Router>
  );
}

export default App;
