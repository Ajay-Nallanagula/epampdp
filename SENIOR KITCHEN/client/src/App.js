import logo from './logo.svg';
import './App.css';
import InputSlider from './components/InputSlider';

function App() {
  return (
    <ul>
      {["Item1", "Item2", "Item3", "Item4"].map(item => {
        return (<li>
          <InputSlider key={item} name={item} />
        </li>)
      })}
    </ul>
  )
}

export default App;
