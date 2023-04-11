import React from "react"; 
import "./style.css"; 
import { useState, useRef } from "react";
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
    const [songIsPlaying, setSongIsPlaying] = useState(false);
    const playbackRef = useRef(null);
    const pauseSong = () => {
        if (playbackRef.current) {
            playbackRef.current.pause();
        }
    }

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
                handleDelete={handleDelete}
                playbackRef={playbackRef}
                pauseSong={pauseSong}
                songIsPlaying={songIsPlaying}
                setSongIsPlaying={setSongIsPlaying}
            />
            <BottomBar
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                playbackRef={playbackRef}
                pauseSong={pauseSong}
                songIsPlaying={songIsPlaying}
                setSongIsPlaying={setSongIsPlaying}
            />
        </>
    );
}

export default App;