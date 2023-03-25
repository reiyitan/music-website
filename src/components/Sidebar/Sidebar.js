import React from "react"; 
import { useState } from "react"; 
import Searchbar from "../Searchbar";
import SidebarPlaylist from "../SidebarPlaylist"; 
import PlaylistNameForm from "../PlaylistNameForm";
import "./style.css";

/**
 * Component for the sidebar containing the Searchbar, add playlist button, and playlists.
 * 
 * @param setMainPanel - Function to update the state of the main panel. 
 * @returns The Sidebar component.
 */
const Sidebar = ({setHeader, setDisplaySongs, currentSong, setCurrentSong}) => {
    const [playlists, setPlaylists] = useState([]); 
    const [addPlaylistButtonStyle, setAddPlaylistButtonStyle] = useState("add-playlist-button");
    const [playlistNameInputStyle, setPlaylistNameInputStyle] = useState("hidden");
    const [currPlaylistDisplaying, setCurrPlaylistDisplaying] = useState("");
    const showNameForm = () => {
        setAddPlaylistButtonStyle("hidden");
        setPlaylistNameInputStyle("playlist-name-input");
    }

    /**
     * Adds a new empty playlist to this component's list of playlists. 
     * Unhides the add play list button and hides the playlist name form. 
     * 
     * @param playlistName - The name of the new playlist.
     */
    const handleSubmit = (playlistName) => {
        if (playlistName === "") {
            console.log("no empty playlist name allowed");
        }
        else if (playlists.find((playlist) => playlist.playlistName === playlistName) !== undefined) {
            //TODO add code saying you cannot have duplicate names
            console.log("no duplicates allowed");
        }
        else { 
            const newPlaylist = {
                playlistName: playlistName,
                songs: []
            };
            //TODO add this playlist to the backend
            setPlaylists([...playlists, newPlaylist]);
        }
        setAddPlaylistButtonStyle("add-playlist-button");
        setPlaylistNameInputStyle("hidden");
    }

    return (
        <div id="sidebar">
            <Searchbar />
            <PlaylistNameForm 
                playlistNameInputStyle={playlistNameInputStyle} 
                onFormSubmit={handleSubmit}
            />
            <button onClick={showNameForm} className={addPlaylistButtonStyle}>+ Add a playlist</button>
            <div id="sidebar-playlists">
                {playlists.slice().reverse().map((playlist) => (
                    <SidebarPlaylist 
                        key={playlist.playlistName} 
                        playlistName={playlist.playlistName}
                        playlists={playlists}
                        setPlaylists={setPlaylists}
                        setHeader={setHeader}
                        currPlaylistDisplaying={currPlaylistDisplaying}
                        setCurrPlaylistDisplaying={setCurrPlaylistDisplaying}
                        setDisplaySongs={setDisplaySongs}
                        currentSong={currentSong}
                        setCurrentSong={setCurrentSong}
                    />
                ))}
            </div>
        </div>
    );
}

export default Sidebar; 