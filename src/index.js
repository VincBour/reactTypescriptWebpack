import { createRoot } from "react-dom/client";
import * as React from 'react'

function App() {
    return (
        <div>
            <h1>HELLO FROM APP</h1>
        </div>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />)