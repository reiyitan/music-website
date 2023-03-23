import React from "react"; 
import { createRoot } from "react-dom/client"; 
import "./styles/style.css"; 
import { useState } from "react";
import Header from "./components/Header"; 
import Sidebar from "./components/Sidebar"; 
import Song from "./components/Song";

const App = () => {
    const [header, setHeader] = useState(["Home Page"]);
    const [displaySongs, setDisplaySongs] = useState([]);
    return (
        <div>
            <Sidebar setHeader={setHeader} setDisplaySongs={setDisplaySongs} />
            {header.map((text) => (
                <Header title={text} />
            ))}
            <div className="main-panel">
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
    );
}

const domNode = document.getElementById("root"); 
const root = createRoot(domNode);
root.render(<App />); 