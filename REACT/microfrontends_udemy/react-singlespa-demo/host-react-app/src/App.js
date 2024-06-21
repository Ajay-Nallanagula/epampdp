import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import TestComponent from './testComponent';
import TestComponent2 from './testComponent2';
import useRegisterMFES from './customHooks/useRegisterMFESLatest';


function App() {

  //Step-3: Register MFE's here 
  const [statusApp1, statusApp2] = useRegisterMFES()

  return (
    <BrowserRouter>
      <h2>Register Route Status App1: {JSON.stringify(statusApp1)}</h2>
      <h2>Register Route Status App2: {JSON.stringify(statusApp2)}</h2>
      <Routes>
        {/* <Route path="/" element={() => <div id="single-spa-application:landing-page">
        </div>
        }>
        </Route> */}
        <Route path="/app1" element={() => <div id="single-spa-application:first-react-app"></div>}></Route>
        <Route path="/app2" element={() => <div id="single-spa-application:second-react-microapp"></div>}></Route>
      </Routes>

      <div className='container'>
        {/* <div className='flexItem'><Link to="/">LandingPage</Link></div> */}
        <div className='flexItem'><Link to="/app1">Test</Link></div>
        <div className='flexItem'><Link to="/app2">Test2</Link></div>
      </div>

    </BrowserRouter>
  );
}

export default App;
