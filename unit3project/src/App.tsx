import { useState } from 'react'
import './App.css'

function App() {
  let saved = JSON.parse(localStorage.getItem("items") || "[]");

  let [items, setItems] = useState(saved);
  let [lightingMode, setLightingMode] = useState(false);

  return (
    <>
      
    </>
  )
}

export default App
