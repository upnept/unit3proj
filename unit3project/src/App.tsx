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
      <MessageInput items={items} setItems={setItems} />
      <MessageBoard items={items} />
    </>
  )
}

export default App
