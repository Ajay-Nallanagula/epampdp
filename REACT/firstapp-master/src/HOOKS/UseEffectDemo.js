import React,{useState,useEffect} from 'react'

const UseEffectDemo = () => {
    const [age, setAge] = useState(0)
    const handleClick = () => setAge((prevAge)=> prevAge + 1)

    useEffect(() => {
      console.log('Use effect has been called!!!')
      document.body.append('You are ' + age + ' years old!\n')
      //setAge((prevAge)=> prevAge + 1)  //DANGER!!!!!!!! infinite loop
   //  return []     // return []  //NOT POSSIBLE TO RETURN 
     return ()=>console.log('UseEffect called on unmount') //componentWillUnMount //treated as clean-up function, this has to run i unmount
    }) //Add dependency array when useEffect will simulate componentDidMount behaviour
    
    return (<div >  
          <button onClick={handleClick} style={{backgroundColor:'turquoise'}}>Update Title!! </button>   
    <div>{age}</div> 
          </div>)
  }

export default UseEffectDemo