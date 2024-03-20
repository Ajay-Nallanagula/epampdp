import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
//import { StylesProvider } from '@material-ui/core/styles';

// import Landing from './components/Landing';
// import Pricing from './components/Pricing';
// import TestApp from './components/TestApp';
import LandingNoCss from './components/LandingNoCss_2';
import PricingNoCss from './components/PricingNoCss_2';
import { StylesProvider, Switch } from '@material-ui/core';
import Pricing from './components/Pricing';
import Landing from './components/Landing';


{/* <StylesProvider>
        <BrowserRouter>
          <Routes>

            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/" component={Landing} />

          </Routes>
        </BrowserRouter>
      </StylesProvider> */}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pricing" component={PricingNoCss} />
        <Route path="/" component={LandingNoCss} />
      </Routes>

    </BrowserRouter >


  );
}
