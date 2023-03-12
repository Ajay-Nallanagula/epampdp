import React,{Suspense} from 'react'
import NormalComponent from './NormalComponent'
import Fallback from './FallBack'



const CodeSplitComponent2 = React.lazy(()=>import('./CodeSplitComponent2' /*webpackChunkName: 'CodeSplitComponent2' */))

const CodeSplitComponent1 = React.lazy(() =>
  import("./CodeSplitComponent1" /*webpackChunkName: 'CodeSplitComponent1' */)
);


const CodeSplittingDemo = ()=>{
    return (
      <Suspense fallback={Fallback}>
        <CodeSplitComponent1 />
        <CodeSplitComponent2/>
        <NormalComponent />
        </Suspense>
      
    )
}

export default CodeSplittingDemo