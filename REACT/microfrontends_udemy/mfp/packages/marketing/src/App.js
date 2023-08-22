import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
//import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';
import TestApp from './components/TestApp';
import LandingNoCss from './components/LandingNoCss';
import PricingNoCss from './components/PricingNoCss';

export default () => {
  return (
    <div>
      {/* <StylesProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Routes>
        </BrowserRouter>
      </StylesProvider> */}

      <BrowserRouter>
        <Routes>
          <Route exact path="/pricing" component={PricingNoCss} />
          <Route path="/" component={LandingNoCss} />
        </Routes>
      </BrowserRouter>
      <TestApp />
    </div>
  );
};
