import React from "react"; 
import "./style.css"; 
import { useState, useRef, createContext } from "react";
import { createPlayback } from "../functions";
import Header from "../Header"; 
import Searchbar from "../Searchbar";
import Sidebar from "../Sidebar"; 
import BottomBar from "../BottomBar";
import SongDisplay from "../SongDisplay";

const Context = createContext();

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
    const [openID, setOpenID] = useState("");
    const [currPlaylistPlaying, setCurrPlaylistPlaying] = useState("");
    const [currPlaylistDisplaying, setCurrPlaylistDisplaying] = useState("");
    const [songIsPlaying, setSongIsPlaying] = useState(false);
    const playbackRef = useRef(null);
    const [queue, setQueue] = useState([]);
    const [history, setHistory] = useState([]); 
    const [shuffle, setShuffle] = useState(false);
    const [loop, setLoop] = useState(false);

    /**
     * Deletes a song from a playlist.
     * 
     * @param target - The song to be deleted. 
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
    
        /**
         * Creates a Howl from currentSong.
         * currentSong's onload() plays the audio once mounted.
         */
        const playSong = (title, artist, album, length) => {
            if (playbackRef.current) {
                playbackRef.current.unload();
            }
            playbackRef.current = createPlayback(
                title,
                artist,
                album,
                length,
                setSongIsPlaying
            );
        }

    const context = {
        setDisplaySongs,
        currentSong,
        setCurrentSong,
        setSongIsPlaying,
        queue,
        setQueue,
        history,
        setHistory,
        handleDelete,
        pauseSong,
        playSong,
        currPlaylistDisplaying,
        setCurrPlaylistDisplaying,
        currPlaylistPlaying,
        setCurrPlaylistPlaying
    };

    return (
        <Context.Provider value={context}>  
            <Searchbar 
                setHeader={setHeader}
                setDisplayType={setDisplayType}
                setOpenID={setOpenID}
            />
            <Sidebar 
                setHeader={setHeader} 
                setDisplaySongs={setDisplaySongs} 
                displayType={displayType}
                setDisplayType={setDisplayType}
            />
            <Header title={header} />
            <SongDisplay
                displayType={displayType}
                displaySongs={displaySongs}
                songIsPlaying={songIsPlaying}
                openID={openID}
                setOpenID={setOpenID}
            />
            <BottomBar
                currPlaylistPlaying={currPlaylistPlaying}
                setCurrPlaylistPlaying={setCurrPlaylistPlaying}
                playbackRef={playbackRef}
                songIsPlaying={songIsPlaying}
                shuffle={shuffle}
                setShuffle={setShuffle}
                loop={loop}
                setLoop={setLoop}
            />
        </Context.Provider>
    );
}

export { Context };
export default App;