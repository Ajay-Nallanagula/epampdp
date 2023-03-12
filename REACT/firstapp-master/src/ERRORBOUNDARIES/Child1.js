import React,{useState} from 'react'

const arr =[]
const Child1 = ()=>{
  const [count, setCount] = useState(0);
  const btnHandler = () => {
    setCount(count + 1);
  };
  if (count === 1) {
  const length =  arr[1].length 
  }
  return (
    <div>
      Child1
      <div>
        <button onClick={btnHandler}>Trigger error Child1</button>
      </div>
    </div>
  );
}

export default Child1