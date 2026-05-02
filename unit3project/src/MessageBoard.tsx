export function MessageBoard(items) {
    return <>
        <div>
            {items.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    </>
}