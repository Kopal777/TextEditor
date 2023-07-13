import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState("Dark Mode");
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('black');
      setText("Light Mode");
      document.body.style.backgroundColor = "#040f32";
      document.body.style.color = "white";
    }
    else {
      setMode('light');
      setText("Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} text={text} />
    <Routes>
        <Route exact path="/" element={ <TextForm mode={mode}/> } />
        <Route exact path="/about" element={ <About mode={mode}/> } />
      </Routes>   
    </>
  );
}

export default App;
