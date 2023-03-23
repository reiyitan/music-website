import React from "react"; 
import { useState } from "react"; 
import Searchbar from "./Searchbar";
import SidebarPlaylist from "./SidebarPlaylist"; 
import PlaylistNameForm from "./PlaylistNameForm";

/**
 * Component for the sidebar containing the Searchbar, add playlist button, and playlists.
 * 
 * @param setMainPanel - Function to update the state of the main panel. 
 * @returns The Sidebar component.
 */
const Sidebar = ({setMainPanel}) => {
    const [playlists, setPlaylists] = useState([]); 
    const [addPlaylistButtonStyle, setAddPlaylistButtonStyle] = useState("add-playlist-button");
    const [playlistNameFormStyle, setPlaylistNameFormStyle] = useState("hidden");
    const showNameForm = () => {
        setAddPlaylistButtonStyle("hidden");
        setPlaylistNameFormStyle("playlist-name-form");
    }

    /**
     * Adds a new empty playlist to this component's list of playlists. 
     * Unhides the add play list button and hides the playlist name form. 
     * 
     * @param playlistName - The name of the new playlist.
     */
    const handleSubmit = (playlistName) => {
        if (playlists.find((playlist) => playlist.playlistName === playlistName) !== undefined) {
            //add code saying you cannot have duplicate names
            console.log("no duplicates allowed");
        }
        else { 
            const newPlaylist = {
            playlistName: playlistName,
            songs: []
            };
            setPlaylists([...playlists, newPlaylist]);
        }
        setAddPlaylistButtonStyle("add-playlist-button");
        setPlaylistNameFormStyle("hidden");
    }

    return (
        <div id="sidebar">
            <Searchbar />
            <PlaylistNameForm 
                playlistNameFormStyle={playlistNameFormStyle} 
                onFormSubmit={handleSubmit}
            />
            <button onClick={showNameForm} className={addPlaylistButtonStyle}>+ Add a playlist</button>
            <div id="sidebar-playlists">
                {playlists.slice().reverse().map((playlist) => (
                    <SidebarPlaylist 
                        key={playlist.playlistName} 
                        playlistName={playlist.playlistName}
                        playlists={playlists}
                        songs={playlist.songs}
                        setPlaylists={setPlaylists}
                        setMainPanel={setMainPanel}
                    />
                ))}
            </div>
        </div>
    );
}

export default Sidebar; 