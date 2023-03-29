import React from "react"; 
import "./style.css"; 
import { useState } from "react";
import Header from "../Header"; 
import Searchbar from "../Searchbar";
import Sidebar from "../Sidebar"; 
import BottomBar from "../BottomBar";
import SongDisplay from "../SongDisplay";

/**
 * Wrapper component for the website.
 * 
 * @returns The main component.
 */
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
                displayType={displayType}
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

export default App;