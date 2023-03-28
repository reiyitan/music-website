import React from "react"; 
import { createRoot } from "react-dom/client"; 
import "./styles/style.css"; 
import { useState } from "react";
import Header from "./components/Header"; 
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar"; 
import BottomBar from "./components/BottomBar";
import SongDisplay from "./components/SongDisplay";

const App = () => {
    const [header, setHeader] = useState("");
    const [displayType, setDisplayType] = useState("");
    const [displaySongs, setDisplaySongs] = useState([]);
    const [currentSong, setCurrentSong] = useState("");

    return (
        <>
            <Searchbar 
                setDisplaySongs={setDisplaySongs}
                setHeader={setHeader}
                setDisplayType={setDisplayType}
            />
            <Sidebar 
                setHeader={setHeader} 
                setDisplaySongs={setDisplaySongs} 
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                setDisplayType={setDisplayType}
            />
            <Header title={header} />
            <SongDisplay
                displayType={displayType}
                displaySongs={displaySongs}
                setDisplaySongs={setDisplaySongs}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <BottomBar
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
        </>
    );
}

const domNode = document.getElementById("root"); 
const root = createRoot(domNode);
root.render(<App />); 