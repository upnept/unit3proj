import { useState } from 'react'
import './App.css'

import { MessageBoard } from "./MessageBoard";
import { MessageInput } from "./MessageInput";

function App() {
  let saved = JSON.parse(localStorage.getItem("items") || "[]");

  let [items, setItems] = useState(saved);
  let [lightingMode, setLightingMode] = useState(false);

  return (
    <>
      <div className={lightingMode && "light" || "dark"}>
        <button onClick={() => setLightingMode(!lightingMode)}>
          Toggle light/dark mode
        </button>
        <MessageInput lightingMode={lightingMode} items={items} setItems={setItems} />
        <MessageBoard lightingMode={lightingMode} items={items} />
      </div>
    </>
  )
}

export default App
