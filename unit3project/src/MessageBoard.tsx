export function MessageBoard({lightingMode, items}:{lightingMode:boolean,items:string[]}) {
    return <>
        <div className={lightingMode && "light" || "dark"} id="center">
            {items.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    </>
}