import React from "react"; 
import { createRoot } from "react-dom/client"; 
import "./styles/style.css"; 
import { useState } from "react";
import Header from "./components/Header"; 
import Sidebar from "./components/Sidebar"; 
import BottomBar from "./components/BottomBar";
import Song from "./components/Song";

const App = () => {
    const [header, setHeader] = useState([""]);
    const [displaySongs, setDisplaySongs] = useState([]);
    const [currentlyPlaying, setCurrentlyPlaying] = useState([""]);

    return (
        <div>
            <Sidebar setHeader={setHeader} setDisplaySongs={setDisplaySongs} />
            {header.map((text) => (
                <Header 
                    key={text}
                    title={text} 
                />
            ))}
            <div id="main-panel">
                <div id="song-display">
                    {displaySongs.map((song) => (
                        <Song
                            key={`${song.title}${song.artist}${song.album}${song.length}`}
                            title={song.title}
                            artist={song.artist}
                            album={song.album}
                            length={song.length}
                            displaySongs={displaySongs}
                            setDisplaySongs={setDisplaySongs}
                        />
                    ))}
                </div>
            </div>
            <BottomBar
                currentlyPlaying={currentlyPlaying}
                setCurrentlyPlaying={setCurrentlyPlaying}
            />
        </div>
    );
}

const domNode = document.getElementById("root"); 
const root = createRoot(domNode);
root.render(<App />); 