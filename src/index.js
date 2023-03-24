import React from "react"; 
import { createRoot } from "react-dom/client"; 
import "./styles/style.css"; 
import { useState } from "react";
import Header from "./components/Header"; 
import Sidebar from "./components/Sidebar"; 
import BottomBar from "./components/BottomBar";
import SongDisplay from "./components/SongDisplay";

const App = () => {
    const [header, setHeader] = useState([""]);
    const [displaySongs, setDisplaySongs] = useState([]);
    const [currentlyPlaying, setCurrentlyPlaying] = useState([""]);

    return (
        <>
            <Sidebar 
                setHeader={setHeader} 
                setDisplaySongs={setDisplaySongs} 
            />
            <Header title={header} />
            <SongDisplay 
                displaySongs={displaySongs}
                setDisplaySongs={setDisplaySongs}
            />
            <BottomBar
                currentlyPlaying={currentlyPlaying}
                setCurrentlyPlaying={setCurrentlyPlaying}
            />
        </>
    );
}

const domNode = document.getElementById("root"); 
const root = createRoot(domNode);
root.render(<App />); 