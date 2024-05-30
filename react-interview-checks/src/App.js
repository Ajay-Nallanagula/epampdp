import { useState, useTransition } from "react";

function App() {
  const [text, setText] = useState('')
  const [isPending, setTransition] = useTransition({ timeoutMs: 3000 })

  const handleChange = (e) => {
    setTransition(() => {
      setText(e.target.value)
    })
   // setText(e.target.value)
  }



  return (
    <div>
      <label>Enter Text</label>
      <input type="text" onChange={handleChange}></input>
      <div><label>Output :{text}</label></div>
      {isPending && <label>Is Loading.....</label>}
    </div>
  );
}

export default App;
