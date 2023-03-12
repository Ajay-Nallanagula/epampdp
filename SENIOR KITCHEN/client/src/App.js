import logo from './logo.svg';
import './App.css';
import InputSlider from './components/InputSlider';
import { useState } from 'react'
import TestForm from './components/packageCalculator/TestForm';
import ExcelToJsonReader from './components/newPackageCalculator/excelToJson/excelToJsonReader';

function App() {
  return (
    // <TestForm />
    <ExcelToJsonReader />
  )

}

export default App;
