export function MessageBoard({items}:{items:string[]}) {
    return <>
        <div id="center">
            {items.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    </>
}