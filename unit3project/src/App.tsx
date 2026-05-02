import { useState } from 'react'
import './App.css'

function App() {
let saved = JSON.parse(localStorage.getItem("items") || "[]");

  let [items, setItems] = useState<string[]>(saved);
  let [input, setInput] = useState("");

  function addItem() {
    let updated = items.concat(input);

    setItems(updated);
    localStorage.setItem("items", JSON.stringify(updated));

    setInput("");
  }

  return (
    <>
      <form onSubmit={addItem}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="add item"
        />
      </form>

      <div>
        {items.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </>
  )
}

export default App
