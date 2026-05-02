import { useState } from 'react'

export function MessageInput({items, setItems}:{items:string[],setItems:any}) {
    let [input, setInput] = useState("");

    function addItem() {
        let updated = items.concat(input);

        setItems(updated);
        localStorage.setItem("items", JSON.stringify(updated));

        setInput("");
    }

    return <>
        <form onSubmit={addItem}>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add Message"
            />
        </form>
    </>
}