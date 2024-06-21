
import { useState } from "react";
import TransitionDemo from "./TransitionDemo";
import useUpdateEffect2 from "./useUpdateEffect";

function App() {
  const [text, setText] = useState('')

  useUpdateEffect2(() => {
    const getProduct = async () => {
      const res = await fetch('https://dummyjson.com/products/' + text)
      const product = await res.json()
      console.log(product)
    }
    getProduct()
  }, [text])

  return (
    // <TransitionDemo />
    <>
      <label>Enter ProductId</label>
      <input type="text" onChange={e => setText(e.target.value)} />

    </>
  )
}

export default App;
