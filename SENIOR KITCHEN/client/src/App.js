import logo from './logo.svg';
import './App.css';
import InputSlider from './components/InputSlider';
import { useState } from 'react'

function App() {
  const [selectAll, setSelectAll] = useState(false)

  const handleChange = (e) => {
    const val = e.target.checked
    setSelectAll(val)
  }

  return (
    <div>
      <div>
        <input type="checkbox" onChange={handleChange} />
        <span>Select All</span></div>
      <br />
      {[1, 2, 3, 4].map(item => {
        return (
          <div>
            <input type="checkbox" checked={selectAll} /> <span>{`${item} Checkbox`}</span>
          </div>
        )
      })}
    </div>
  )

}

export default App;
