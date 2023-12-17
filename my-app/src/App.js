import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import {BrowserRouter, Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" exact Component={Home}/>
    </Routes>


    </BrowserRouter>
   
    </div>
  );
}

export default App;
