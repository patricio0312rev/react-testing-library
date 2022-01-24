import React, { useState } from "react";

const Hello = () => {
    const [name, setName] = useState('');

    return(
        <div>
            <h1 data-testid="heading">Hello</h1>
            <button onClick={() => console.log("I'm clicked")}>Click me</button>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
    )
}

export default Hello;