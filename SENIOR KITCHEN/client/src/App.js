import logo from './logo.svg';
import './App.css';
import InputSlider from './components/InputSlider';
import { useState } from 'react'
import TestForm from './components/packageCalculator/TestForm';
import ExcelToJsonReader from './components/newPackageCalculator/excelToJson/excelToJsonReader';
import SpreadSheetLoader from './components/expensesGoogleDriveExcel/spreadheetsLoader';
import DeliveryDetails from './components/deliveryComponent/deliveryDetails';

function App() {
  return (
    // <TestForm />
    // <ExcelToJsonReader />
    // <SpreadSheetLoader />
    <DeliveryDetails />
  )

}

export default App;
