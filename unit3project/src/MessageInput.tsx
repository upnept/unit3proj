import { useState } from 'react'

export function MessageInput({lightingMode, items, setItems}:{lightingMode:boolean,items:string[],setItems:any}) {
    let [input, setInput] = useState("");

    function addItem() {
        let updated = items.concat(input);

        setItems(updated);
        localStorage.setItem("items", JSON.stringify(updated));

        setInput("");
    }

    return <>
        <form className={lightingMode && "light" || "dark"}  onSubmit={addItem}>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add Message"
            />
        </form>
    </>
}