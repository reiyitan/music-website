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
    const handleDelete = (target) => {
        setDisplaySongs((prevDisplaySongs) => {
            return prevDisplaySongs.filter((song) => {
                return !(song.title === target.title
                    && song.artist === target.artist
                    && song.album === target.album
                    && song.length === target.length
                )
            });
        });
    }
    const [currentSong, setCurrentSong] = useState("");
    const [controls, setControls] = useState({
        isPlaying: false
    });

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
                controls={controls}
                setControls={setControls}
                handleDelete={handleDelete}
            />
            <BottomBar
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
        </>
    );
}

export default App;