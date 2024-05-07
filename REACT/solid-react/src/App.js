import SrpComponent from './SrpComponent'
import { YellowInput, FancyInput } from './OpenClosePrinciple'
import ButtonUsage from './LiskovSubstitution'
import { BrowserRouter } from 'react-router-dom'
import Router from './RouterDemo/Router'

const App = () => {

    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    )
    // return (
    //     <>
    //         <h3>Violates SRP</h3>
    //         <SrpComponent></SrpComponent>
    //         <h3>Implements OCP</h3>
    //         <div>
    //             <FancyInput />
    //         </div>
    //         <div>
    //             <YellowInput />
    //         </div>
    //         <div>
    //             <h3>LiskovSubstitution</h3>
    //             <ButtonUsage />
    //         </div>
    //     </>
    // )
}

export default App