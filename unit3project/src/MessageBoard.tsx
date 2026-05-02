export function MessageBoard({items}:{items:string[]}) {
    return <>
        <div>
            {items.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    </>
}