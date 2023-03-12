import React,{useEffect,useState} from 'react'



const UseEffectDemoAPICall = ()=>{
const [data,setData] = useState([])
const [error,setError] = useState(null)

const sayGoodBye = ()=>{
    console.log('goodBye-Executed when component is UnMounted')
}

useEffect(()=>{
//UseEffectDemoAPICall() --> render()-->setState()-->useEffect()-->setState()-->render()-->useEffect()........ infinite loop 
    console.log('Use effect called')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        response.json()
        .then((allEmpRes)=>{
             setData(()=>[...allEmpRes])
        })
       
    }).catch((error)=>{
        setError(()=>({...error}))
    })
    //UseEffect has to return a function () => sayGoodBye() is also valid or function reference is valid too
return sayGoodBye
})

if(error){return (<div>{JSON.stringify(error)}</div>)}
return(<div>{data.length}</div>)
}

export default UseEffectDemoAPICall