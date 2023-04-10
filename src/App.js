import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./component/home/Home"

import BodyComponent from './component/Body/BodyComponent'
import ProductPage from "./component/product/Product"
import FooterSection from './component/footer/Footer'

function App() {
  return (
    <div className="App">
     <HomePage/>
     
     <BodyComponent/>
     <FooterSection/>
     

      
    </div>
  );
}

export default App;
