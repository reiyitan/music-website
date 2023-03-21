import React from "react"; 
import { createRoot } from "react-dom/client"; 
import "./styles/style.css"; 
import Sidebar from "./components/Sidebar"; 

const App = () => {
    return (
        <Sidebar />
    );
}

const domNode = document.getElementById("root"); 
const root = createRoot(domNode);
root.render(<App />); 