import SrpComponent from './SrpComponent'
import { YellowInput, FancyInput } from './OpenClosePrinciple'
import ButtonUsage from './LiskovSubstitution'

const App = () => {
    return (
        <>
            <h3>Violates SRP</h3>
            <SrpComponent></SrpComponent>
            <h3>Implements OCP</h3>
            <div>
                <FancyInput />
            </div>
            <div>
                <YellowInput />
            </div>
            <div>
                <h3>LiskovSubstitution</h3>
                <ButtonUsage />
            </div>
        </>
    )
}

export default App