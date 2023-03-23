import React from "react"; 
import { createRoot } from "react-dom/client"; 
import "./styles/style.css"; 
import { useState } from "react";
import Sidebar from "./components/Sidebar"; 


const App = () => {
    const [mainPanel, setMainPanel] = useState(<></>);
    return (
        <div>
            <Sidebar setMainPanel={setMainPanel} />
            {mainPanel}
        </div>
    );
}

const domNode = document.getElementById("root"); 
const root = createRoot(domNode);
root.render(<App />); 