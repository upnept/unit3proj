import { useState } from 'react'
import './App.css'

function App() {
  let saved = JSON.parse(localStorage.getItem("items") || "[]");

  let [items, setItems] = useState<string[]>(saved);

  return (
    <>
      <div>
        {items.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </>
  )
}

export default App
