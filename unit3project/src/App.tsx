import { useState } from 'react'
import './App.css'

import { MessageBoard } from "./MessageBoard";
import { MessageInput } from "./MessageInput";

function App() {
  let savedMsgs = JSON.parse(localStorage.getItem("msgs") || "[]");
  let savedTheme = JSON.parse(localStorage.getItem("theme1") || "false");

  let [items, setItems] = useState(savedMsgs);
  let [lightingMode, setLightingMode] = useState(savedTheme);

  return (
    <>
      <div className={lightingMode && "light" || "dark"}>
        <button onClick={() => {
          let newMode = !lightingMode;
          setLightingMode(newMode);
          localStorage.setItem("theme1", JSON.stringify(newMode));
        }}>
          Toggle light/dark mode
        </button>
        <MessageInput lightingMode={lightingMode} items={items} setItems={setItems} />
        <MessageBoard lightingMode={lightingMode} items={items} />
      </div>
    </>
  )
}

export default App
