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
    const [currentSong, setCurrentSong] = useState("");
    const [currPlaylistPlaying, setCurrPlaylistPlaying] = useState("");
    const [currPlaylistDisplaying, setCurrPlaylistDisplaying] = useState("");
    const [songIsPlaying, setSongIsPlaying] = useState(false);
    const playbackRef = useRef(null);
    const [history, setHistory] = useState([]); 
    const [queue, setQueue] = useState([]);

    /**
     * Deletes a song from a playlist.
     * 
     * @param target - The song to be deleted as a JSON. 
     */
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

    /**
     * Pauses the current Howl.
     */
    const pauseSong = () => {
        setSongIsPlaying(false);
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
                currPlaylistDisplaying={currPlaylistDisplaying}
                setCurrPlaylistDisplaying={setCurrPlaylistDisplaying}
            />
            <Header title={header} />
            <SongDisplay
                displayType={displayType}
                displaySongs={displaySongs}
                setDisplaySongs={setDisplaySongs}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                currPlaylistPlaying={currPlaylistPlaying}
                setCurrPlaylistPlaying={setCurrPlaylistPlaying}
                currPlaylistDisplaying={currPlaylistDisplaying}
                handleDelete={handleDelete}
                playbackRef={playbackRef}
                pauseSong={pauseSong}
                songIsPlaying={songIsPlaying}
                setSongIsPlaying={setSongIsPlaying}
                history={history}
                setHistory={setHistory}
                queue={queue}
                setQueue={setQueue}
            />
            <BottomBar
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                currPlaylistPlaying={currPlaylistPlaying}
                setCurrPlaylistPlaying={setCurrPlaylistPlaying}
                playbackRef={playbackRef}
                pauseSong={pauseSong}
                songIsPlaying={songIsPlaying}
                setSongIsPlaying={setSongIsPlaying}
                history={history}
                setHistory={setHistory}
                queue={queue}
                setQueue={setQueue}
            />
        </>
    );
}

export default App;