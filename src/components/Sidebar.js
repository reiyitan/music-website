import React from "react"; 
import { useState } from "react"; 
import Searchbar from "./Searchbar";
import Playlist from "./Playlist"; 

/**
 * Component for naming a playlist. This component is by default hidden, and 
 * is displayed when a user clicks on the add playlist button. 
 * 
 * @param playlistNameFormStyle - The css className for the input form. This state is passed from Sidebar. 
 * @param onFormSubmit - A function passed from Sidebar used to pass user input back to the parent component.
 * 
 * @returns The playlist name form component.
 */
const PlaylistNameForm = ({ playlistNameFormStyle, onFormSubmit }) => {
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setValue("");
        onFormSubmit(e.target.playlistName.value);
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                className={playlistNameFormStyle}
                name="playlistName" 
                value={value} 
                placeholder="Enter a playlist name:"
                onChange={handleChange} />
        </form>
    );
}

/**
 * Component for the sidebar containing the Searchbar, add playlist button, and playlists.
 * 
 * @returns The Sidebar component.
 */
const Sidebar = () => {
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
            <PlaylistNameForm playlistNameFormStyle={playlistNameFormStyle} onFormSubmit={handleSubmit} />
            <button onClick={showNameForm} className={addPlaylistButtonStyle}>+ Add a playlist</button>
            <div id="sidebar-playlists">
                {playlists.slice().reverse().map((playlist) => (
                    <Playlist 
                        key={playlist.playlistName} 
                        playlistName={playlist.playlistName}
                        playlists={playlists}
                        setPlaylists={setPlaylists}
                    />
                ))}
            </div>
        </div>
    );
}

export default Sidebar; 