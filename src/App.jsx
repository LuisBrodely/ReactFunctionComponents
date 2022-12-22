import { useState } from 'react'
import './App.css'
import ContadorHooks from "./components/ContadorHooks.jsx";

function App() {


  return (
    <div className="App">
        <ContadorHooks mensaje="Soy un mensaje" />
    </div>
  )
}

export default App
