import React from "react";

const Hello = () => {
    return(
        <div>
            <h1 data-testid="heading">Hello</h1>
            <button onClick={() => console.log("I'm clicked")}>Click me</button>
        </div>
    )
}

export default Hello;